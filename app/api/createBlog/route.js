import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
  try {
    const response = await axios.post('https://www.vbot.com/api/vnoc/v1/jobs/a-la-carte/blog', {
      userEmail: process.env.NEXT_PUBLIC_VBOT_EMAIL,
      userPassword: process.env.NEXT_PUBLIC_VBOT_PASSWORD,
      assetId: process.env.NEXT_PUBLIC_VBOT_ASSET_ID,
      vnocAPIKey: process.env.NEXT_PUBLIC_VBOT_API_KEY,
      themeComment: 'Write a blog about how SchoolBot helps students learn more effectively using AI.',
      needsApproval: false,
      platform: 'vbot',
    });

    return NextResponse.json({ message: 'Blog job created', jobId: response.data.jobId });
  } catch (error) {
    console.error('Error creating blog job:', error);
    return NextResponse.json({ error: 'Error creating blog job' }, { status: 500 });
  }
}
