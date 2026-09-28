// src/app/api/events/route.ts
import { NextResponse } from 'next/server';
import { getAllEvents } from '../../../backend/services/eventService';

export async function GET() {
  try {
    const events = await getAllEvents();
    return NextResponse.json({ success: true, data: events }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Gagal mengambil data portofolio event.' },
      { status: 500 }
    );
  }
}