import { query } from '@/lib/db';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const petId = params.id;
    
    // Delete related applications first
await query('DELETE FROM application WHERE PetID = ?', [petId]);

    // Delete the pet directly
    const result = await query('DELETE FROM Pet WHERE PetID = ?', [petId]) as any;

    if (result.affectedRows === 0) {
      return NextResponse.json(
        { error: 'Pet not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: 'Pet deleted successfully' },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete pet - ' + (error instanceof Error ? error.message : 'Unknown error') },
      { status: 500 }
    );
  }
}
