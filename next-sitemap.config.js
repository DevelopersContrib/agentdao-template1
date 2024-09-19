/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://agentdao.com',
    generateRobotsTxt: true, // (optional)
    exclude:['/thanks']
    // ...other options
  }