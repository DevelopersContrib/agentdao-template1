import React from "react";
import Script from "next/script";
import { Metadata } from "next";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support Page ${domain}",
  description: "Send a Support Ticket for ${domain}",
  // other metadata
};

const ContactPage = () => {
  const domain = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <div className="widget2">
    <Script src="https://tools.contrib.com/pages/contact?d=${domain}&class=widget2&header=0&footer=0" />
    </div>
   
  );
};

export default ContactPage;