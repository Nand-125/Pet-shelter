import { query } from '@/lib/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Adopter } from '@/types/db';

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    
    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    
    try {
      // Get user from database
      const result = await query<Adopter>(
        `SELECT 
          AdopterID,
          FirstName,
          LastName,
          Email,
          PasswordHash
         FROM Adopter 
         WHERE Email = ?`,
        [cleanEmail]
      );

      if (result.results.length === 0) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      const user = result.results[0];

      // Verify password
      const isValid = await bcrypt.compare(password, user.PasswordHash);
      if (!isValid) {
        return NextResponse.json(
          { error: 'Invalid credentials' },
          { status: 401 }
        );
      }

      return NextResponse.json({
        user: {
          id: user.AdopterID,
          email: user.Email,
          name: `${user.FirstName} ${user.LastName}`
        }
      });

    } catch (queryError: any) {
      console.error('Database query failed:', queryError);
      return NextResponse.json(
        { 
          error: 'Database operation failed',
          details: process.env.NODE_ENV === 'development' ? queryError.message : undefined
        },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.error('Login process failed:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}