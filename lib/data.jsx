import axios from 'axios'
import { headers } from 'next/headers'

export function getDomain() {
  // Get the DOMAIN from the environment
  const DOMAIN = process.env.NEXT_PUBLIC_VERCEL_URL;

  // Ensure DOMAIN is defined
  if (!DOMAIN) {
    throw new Error("NEXT_PUBLIC_VERCEL_URL is not set in environment variables.");
  }

  // Get the headers (this will only work on the server-side)
  let headersList;
  try {
    headersList = headers();
  } catch (error) {
    console.warn("headers() not available on client-side or during static generation.");
  }

  // Get the host from headers or fallback to DOMAIN
  const referrer = headersList?.get('host') || DOMAIN;

  // Determine domainName: if referrer is localhost, use DOMAIN, else use the referrer
  const domainName = referrer.includes('localhost') ? DOMAIN : referrer;

  // Return the domain name, removing 'www.' if present
  return domainName.replace('www.', '');
}

export async function getData() {
  const domain = getDomain();
  const url = process.env.CONTRIB_API1+`&domain=${domain}`
  const res = await fetch(url, { next: { revalidate: 3600 } });
  
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  
  return res.json()
}

export async function getScript(url) {
  try{
    const res = await axios.get(url);
    return res.data;
  }catch(e){
    console.log('error getScript',e)
    return {error:'error getScript'}
  }
}


export async function getBlogs() {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL;
  const url = process.env.GET_BLOGS+`&domain=${domain}`
  console.log('url',url)
  const res = await fetch(url, { next: { revalidate: 3600 } });
 
  
  if (!res.ok){
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function getBlogsById(id) {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL;
  const url = process.env.GET_BLOGS+`&domain=${domain}&id=${id}`;
  console.log('url',url)
  const res = await fetch(url, { next: { revalidate: 3600 } });
 
  
  if (!res.ok){
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
  }

  return res.json();
}
