import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    //const userId = searchParams.get('userId');
     const userId = 1;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    const result = await query<{
      petId: number;
      petName: string;
      age: string;
      breed: string;
      adoptionDate: string;
      shelterName: string;
    }>(`
      SELECT 
        p.PetID as petId,
        p.Pet_name as petName,
        p.Age,
        pc.Breed,
        pah.AdoptionDate,
        s.Shelter_name as shelterName
      FROM PetAdoptionHistory pah
      JOIN Pet p ON pah.PetID = p.PetID
      JOIN PetCategory pc ON p.CategoryID = pc.CategoryID
      JOIN Shelter s ON p.ShelterID = s.ShelterID
      WHERE pah.AdopterID = ?
      ORDER BY pah.AdoptionDate DESC
    `, [userId]);

    return NextResponse.json(result.results);
  } catch (error) {
    console.error('Error fetching adoption history:', error);
    return NextResponse.json(
      { error: 'Failed to fetch adoption history' },
      { status: 500 }
    );
  }
}