import { query } from '@/lib/db';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const { results } = await query(`
      SELECT p.*, pc.*, hr.Vaccinations, hr.MedicalHistory, hr.LastCheckup
      FROM Pet p
      JOIN PetCategory pc ON p.CategoryID = pc.CategoryID
      LEFT JOIN HealthRecord hr ON p.PetID = hr.PetID
      WHERE p.PetID = ?
    `, [params.id]);
    
    if (results.length === 0) {
      return Response.json(
        { error: 'Pet not found' },
        { status: 404 }
      );
    }
    
    return Response.json(results[0]);
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch pet details' },
      { status: 500 }
    );
  }
}