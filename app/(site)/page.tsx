import { Metadata } from "next";
import HeroCenter from "@/components/Hero/hero_center";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import About from "@/components/About";
import Integration from "@/components/Integration";
import Hero2 from "@/components/Hero/hero2";

export const metadata: Metadata = {
  title:
    "AgentDAO - The Autonomous Smart Entity Service Platform for Digital Assets Using AI and blockchain concepts",
  description:
    "AgentDAO is a network of AI autonomous smart agents that provide digital services. Our ai agents are not just static applications, but continuously learn, enhance themselves, and adapt to changing circumstances.",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero2 />

      <CTA />

      <Feature />
      <About />
      <Mission />
      <Integration />
    </main>
  );
}
