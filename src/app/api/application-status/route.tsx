import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function GET(request: Request) {
  try {
    // Get user ID from session or token (you'll need to implement this)
    const userId = 1; // Replace with actual user ID from session
    
    const result = await query<{
      applicationId: number;
      petName: string;
      petPhoto: string;
      status: string;
      applicationDate: string;
      meetupDate: string | null;
      meetupLocation: string | null;
      meetupStatus: string | null;
    }>(`
      SELECT 
        a.ApplicationID as applicationId,
        p.Pet_name as petName,
        (SELECT pp.PhotoURL FROM PetPhoto pp WHERE pp.PetID = p.PetID AND pp.IsPrimary = 1 LIMIT 1) as petPhoto,
        a.App_Status as status,
        a.ApplicationDate,
        m.Meet_DateTime as meetupDate,
        l.Location_Name as meetupLocation,
        m.meetUp_Status as meetupStatus
      FROM Application a
      JOIN Pet p ON a.PetID = p.PetID
      LEFT JOIN Meetup m ON a.ApplicationID = m.ApplicationID
      LEFT JOIN Location l ON m.LocationID = l.LocationID
      WHERE a.AdopterID = ?
      ORDER BY a.ApplicationDate DESC
    `, [userId]);

    return NextResponse.json(result.results);
  } catch (error) {
    console.error('Error fetching application status:', error);
    return NextResponse.json(
      { error: 'Failed to fetch application status' },
      { status: 500 }
    );
  }
}