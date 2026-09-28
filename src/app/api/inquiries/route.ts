// src/app/api/inquiries/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { validateInquiryInput } from '../../../backend/validations/inquiryValidation';
import { processClientInquiry } from '../../../backend/services/inquiryService';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validation = validateInquiryInput(body);
    if (!validation.isValid) {
      return NextResponse.json(
        { success: false, message: 'Validasi gagal', errors: validation.errors },
        { status: 400 }
      );
    }

    const result = await processClientInquiry(body);
    
    if (!result.success) {
      return NextResponse.json(result, { status: 500 });
    }

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid JSON payload atau kesalahan server.' },
      { status: 400 }
    );
  }
}