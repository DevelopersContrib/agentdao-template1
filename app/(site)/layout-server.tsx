import { getData, getDomain } from "@/lib/data";
import { Metadata } from 'next';

export async function generateMetadata() {
  const c = await getData();
  return {
    title: c.data.title ? c.data.title : 'Welcome to ' + c.data.domainName,
    description: c.data.description,
    keywords: c.data.keywords,
    author: c.data.author
  }
}