
import { Metadata } from "next";
import HubspotContactForm from "@/components/Betaform/form";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";


export async function generateMetadata(): Promise<Metadata> {
  const c = await getData();
  return {
    // This will override or extend the layout metadata
    title: `Beta Signup - ${c.data.title || c.data.domainName}`,
    description: `${c.data.description}`,
  };
}
export default async function JoinTheTeamPage () {
  const c = await getData();
  const domain = getDomain();
  return (
    <>
    <Header c={c}/>
    <section className="pt-35 px-20 md:px-8 ml-20 mr-20">
    <div className="pb-20 px-20">
    <h1 className="light:text-primary capitalize dark:text-white border-txtgrad2 animate-once animate-jump mb-8 font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
                                 Apply Today and Start Your Journey with AgentDAO via <i>{domain}</i>
        </h1>
             <div className="p-10 bg-white">
       
        <HubspotContactForm />
      </div>
    </div>
    </section>
    </>
  );
};


