import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Agent Dao",
  description: "This is Support page for AgentDao",
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
