/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_VERCEL_URL || 'https://agentdao.com',
    generateRobotsTxt: true, // (optional)
    exclude:['/thanks']
    // ...other options
  }