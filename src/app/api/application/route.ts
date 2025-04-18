import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  console.log('[DEBUG] Starting application submission');
  
  try {
    // 1. Parse and log incoming data
    const formData = await request.json();
    console.log('[DEBUG] Raw form data received:', JSON.stringify(formData, null, 2));

    // 2. Validate required fields
    const requiredFields = [
      'email', 'dob', 'residenceType', 'hasOtherPets',
      'adoptionReason', 'previouslyAdopted', 'primaryCaregiver',
      'emergencyContact', 'age', 'income', 'petId'
    ];

    const missingFields = requiredFields.filter(field => !formData[field]);
    if (missingFields.length > 0) {
      console.error('[ERROR] Missing fields:', missingFields);
      return NextResponse.json(
        { error: `Missing required fields: ${missingFields.join(', ')}` },
        { status: 400 }
      );
    }

    // 3. Verify adopter exists
    console.log('[DEBUG] Checking adopter with email:', formData.email);
    const adopterResult = await query(
      'SELECT AdopterID FROM Adopter WHERE Email = ?',
      [formData.email]
    );

    if (!adopterResult.results?.[0]?.AdopterID) {
      console.error('[ERROR] Adopter not found for email:', formData.email);
      return NextResponse.json(
        { error: "Please complete your registration first" },
        { status: 404 }
      );
    }

    const adopterId = adopterResult.results[0].AdopterID;
    console.log('[DEBUG] Found adopter ID:', adopterId);

    // 4. Verify pet exists
    console.log('[DEBUG] Verifying pet ID:', formData.petId);
    const petExists = await query(
      'SELECT 1 FROM Pet WHERE PetID = ?',
      [formData.petId]
    );

    if (!petExists.results?.length) {
      console.error('[ERROR] Invalid pet ID:', formData.petId);
      return NextResponse.json(
        { error: "Invalid pet information" },
        { status: 400 }
      );
    }

    // 5. Prepare data for insertion
    const insertData = {
      adopterId,
      petId: formData.petId,
      dob: new Date(formData.dob).toISOString().split('T')[0],
      residenceType: formData.residenceType,
      hasOtherPets: formData.hasOtherPets === "yes" ? 1 : 0,
      adoptionReason: formData.adoptionReason,
      previouslyAdopted: formData.previouslyAdopted === "yes" ? 1 : 0,
      primaryCaregiver: formData.primaryCaregiver,
      emergencyContact: formData.emergencyContact,
      age: parseInt(formData.age, 10),
      income: parseFloat(formData.income)
    };

    console.log('[DEBUG] Prepared insert data:', JSON.stringify(insertData, null, 2));

    // 6. Insert application
    console.log('[DEBUG] Executing INSERT query');
    const insertQuery = `
      INSERT INTO Application (
        AdopterID, PetID, ApplicationDate, DOB,
        ResidenceType, OtherPets, AdoptionReason,
        PreviouslyAdopted, PrimaryCaregiver, EmergencyContact,
        Age, AnnualIncome
      ) VALUES (?, ?, CURDATE(), ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    const insertParams = [
      insertData.adopterId,
      insertData.petId,
      insertData.dob,
      insertData.residenceType,
      insertData.hasOtherPets,
      insertData.adoptionReason,
      insertData.previouslyAdopted,
      insertData.primaryCaregiver,
      insertData.emergencyContact,
      insertData.age,
      insertData.income
    ];

    const applicationResult = await query(insertQuery, insertParams);
    console.log('[DEBUG] Insert result:', applicationResult);

    // 7. Get inserted ID
    const lastIdResult = await query('SELECT LAST_INSERT_ID() AS applicationId');
    const applicationId = lastIdResult.results[0].applicationId;
    console.log('[DEBUG] New application ID:', applicationId);

    return NextResponse.json({ 
      success: true,
      applicationId,
      message: 'Application submitted successfully'
    });

  } catch (error: any) {
    console.error('[ERROR] Full submission error:', {
      message: error.message,
      code: error.code,
      sqlMessage: error.sqlMessage,
      stack: error.stack
    });

    return NextResponse.json(
      { 
        error: 'Failed to submit application',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

export const dynamic = 'force-dynamic';