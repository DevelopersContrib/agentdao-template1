import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const jobId = searchParams.get('jobId');

  try {
    const response = await axios.post('https://www.vbot.com/api/vnoc/v1/jobs/job-by-id', {
      userEmail: process.env.NEXT_PUBLIC_VBOT_EMAIL,
      userPassword: process.env.NEXT_PUBLIC_VBOT_PASSWORD,
      jobId: jobId,
      vnocAPIKey: process.env.NEXT_PUBLIC_VBOT_API_KEY,
    });

    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching blog content:', error);
    return NextResponse.json({ error: 'Error fetching blog content' }, { status: 500 });
  }
}
