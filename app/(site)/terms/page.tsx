import React from "react";
import { Metadata } from "next";
import TermsText from "@/components/Legal/terms";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service",
  // other metadata
};

export default async function TermsPage () {
  const c = await getData();
  
  return (
    <>
    <Header c={c}/>
    <TermsText domain={c.data.domainName.replace(/(^\w|\s\w)/g, m => m.toUpperCase())}/>
   </>
  );
};

