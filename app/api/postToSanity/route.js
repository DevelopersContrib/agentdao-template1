import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req) {
  const body = await req.json();

  try {
    const response = await axios.post(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`, {
      mutations: [
        {
          create: {
            _type: 'post',
            title: body.content.title,
            body: body.content.body,
            slug: {
              _type: 'slug',
              current: body.content.slug,
            },
          },
        },
      ],
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.NEXT_PUBLIC_SANITY_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    return NextResponse.json({ message: 'Blog posted to Sanity', data: response.data });
  } catch (error) {
    console.error('Error posting to Sanity:', error);
    return NextResponse.json({ error: 'Error posting to Sanity' }, { status: 500 });
  }
}
