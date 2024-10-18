import React from "react";
import { Metadata } from "next";
import PrivacyPolicyText from "@/components/Legal/privacypolicy";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Agent Dao Privacy Policy",
  // other metadata
};

export default async function PrivacyPage() {
  const c = await getData();
  return (
    <>
    <Header c={c}/>
    <PrivacyPolicyText domain={c.data.domainName.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}/>
    <Footer domain={c.data.domainName.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} />
    </>
   
  );
};

