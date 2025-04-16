import { query } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await query('SELECT 1 + 1 AS solution');
    return NextResponse.json({
      databaseStatus: 'connected',
      simpleQueryResult: result
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        databaseStatus: 'error',
        error: error.message,
        stack: error.stack
      },
      { status: 500 }
    );
  }
}