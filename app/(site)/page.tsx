import { Metadata } from "next";
import HeroCenter from "@/components/Hero/hero_center";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Feature from "@/components/Features";
import About from "@/components/About";
import Integration from "@/components/Integration";
import Hero2 from "@/components/Hero/hero2";
import { getData, getDomain } from "lib/data";
import Agentfeatures from "@/components/Mission copy";
import Blog from "@/components/Blog";
import Header from "@/components/Header";

export async function generateMetadata(): Promise<Metadata> {
  const c = await getData();
  return {
    // This will override or extend the layout metadata
    title: `Home - ${c.data.title || c.data.domainName}`,
    description: `${c.data.description}`,
  };
}

export default async function Home() {
  const c = await getData();
  const domain = getDomain();
  return (
    <main>
      <Header c={c}/>
      <Hero2 domain={domain} />
      <Agentfeatures domain={domain} />
      <Feature />
      <About/>

      <Integration />
      <Blog />
    </main>
  );
}
