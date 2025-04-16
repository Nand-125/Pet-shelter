// app/api/signup/route.ts
import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    console.log('Signup request received');
    const { firstName, lastName, email, password, ssn, address } = await request.json();
    console.log('Received data:', { 
      firstName, 
      lastName, 
      email, 
      ssn: ssn ? '***' : 'missing', 
      address 
    });

    // Validate required fields
    if (!firstName || !lastName || !email || !password || !ssn || !address) {
      console.log('Validation failed - missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate password strength
    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Clean SSN input (remove hyphens)
    const cleanedSSN = ssn.replace(/-/g, '');
    if (cleanedSSN.length < 9 || cleanedSSN.length > 11) {
      return NextResponse.json(
        { error: 'SSN must be between 9-11 digits' },
        { status: 400 }
      );
    }

    // Hash the password
    console.log('Hashing password...');
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log('Generated hash:', passwordHash); // Debug log
    console.log('Password hashed successfully');





    // Insert into database using stored procedure
    console.log('Calling InsertAdopterWithEncryptedSSN...');
    await query(
      'CALL InsertAdopterWithEncryptedSSN(?, ?, ?, ?, ?, ?, ?)',
      [
        cleanedSSN,
        firstName.trim(),
        lastName.trim(),
        email.trim().toLowerCase(),
        '', // phone (empty for now)
        address.trim(),
        passwordHash
      ]
    );
    console.log('Adopter created successfully');

    return NextResponse.json(
      { message: 'Account created successfully' },
      { status: 201 }
    );

  } catch (error: any) {
    console.error('Full error:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
      stack: error.stack
    });

    // Handle specific MySQL errors
    if (error.code === 'ER_DUP_ENTRY') {
      return NextResponse.json(
        { error: 'Email already exists' },
        { status: 409 }
      );
    }

    if (error.code === 'ER_NO_DEFAULT_FOR_FIELD') {
      return NextResponse.json(
        { error: 'Database configuration error. Missing required field.' },
        { status: 500 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        ...(process.env.NODE_ENV === 'development' && {
          details: error.message,
          stack: error.stack
        })
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic'; // Ensure this is a dynamic route