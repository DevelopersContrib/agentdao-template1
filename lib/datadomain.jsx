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