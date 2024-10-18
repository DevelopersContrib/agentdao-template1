import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Support Page ${domain}",
  description: "This is the Support page for ${domain}",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pt-40 pb-20">
      <Contact />
    </div>
  );
};

export default SupportPage;
