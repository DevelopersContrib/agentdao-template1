
import { Metadata } from "next";
import HubspotContactForm from "@/components/Betaform/form";


export const metadata: Metadata = {
  title: "Beta Signup to  AgentDao",
  description: "Beta signup options for AgentDao",
  // other metadata
};

const JoinTheTeamPage = () => {
  return (
    <section className="pt-35 px-20 md:px-8 ml-20 mr-20">
    <div className="pb-20 px-20">
    <h1 className="light:text-primary dark:text-white border-txtgrad2 animate-once animate-jump mb-8 font-extrabold leading-none tracking-normal md:text-6xl md:tracking-tight">
                                 Apply Today and Start Your Journey with AgentDAO
        </h1>
             <div className="p-10 bg-white">
       
        <HubspotContactForm />
      </div>
    </div>
    </section>
  );
};

export default JoinTheTeamPage;
