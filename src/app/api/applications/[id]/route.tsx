import { NextResponse } from 'next/server';
import { query } from '@/lib/db';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Get user ID from session or token (you'll need to implement this)
    const userId = 1; // Replace with actual user ID from session
    
    // First update the application status
    await query(
      `UPDATE Application SET App_Status = 'Withdrawn' 
       WHERE ApplicationID = ? AND AdopterID = ?`,
      [params.id, userId]
    );

    // Then update the pet status back to Available
    await query(
      `UPDATE Pet p
       JOIN Application a ON p.PetID = a.PetID
       SET p.AdoptionStatus = 'Available'
       WHERE a.ApplicationID = ?`,
      [params.id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error withdrawing application:', error);
    return NextResponse.json(
      { error: 'Failed to withdraw application' },
      { status: 500 }
    );
  }
}