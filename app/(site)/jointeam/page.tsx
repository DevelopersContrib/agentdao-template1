import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import VNOC_newsletter from "@/components/Forms/newsletter";


export const metadata: Metadata = {
   
  title: "Join the Team | {domain}",
  description: "Join the {domain} Team: Embrace the Power of Collaboration-Be Part of the Colony - Where Every Member Matters",
  
  // other metadata
};



const Jointeampage = () => {
 const domain = process.env.NEXT_PUBLIC_VERCEL_URL;
  return (
    <>
<section
    className="pt-40 pb-20 lg:pt-[120px] lg:pb-[90px]">

   <div  className="mx-auto max-w-c-1390 relative pt-10 lg:pt-15 xl:pt-20 px-7.5 lg:px-15 xl:px-20 overflow-hidden">
      <div  className="flex flex-wrap items-center justify-between -mx-4">
         <div  className="w-full px-4 lg:w-6/12">
            <div  className="flex items-center -mx-3 sm:-mx-4">
                        <div
                           className=" bg-primary dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:bg-blacksection dark:stroke-strokedark relative z-10 overflow-hidden rounded py-12 px-8 md:p-[70px]"
                           >
                           <div className="flex flex-wrap items-center -mx-4">
                              <div className="w-full px-4 lg:w-1/2">
                                 <span className="block mb-4 text-base font-medium text-white capitalize">
                                 Apply Today and Start Your Journey with {domain}
                                 </span>
                                 <h2
                                    className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[40px]/[48px] lg:mb-0"
                                    >
                                    <span className="xs:block"> Join our </span>
                                    <span>Team</span>
                                 </h2>
                              </div>
                              <div className="w-full px-4 lg:w-1/2">
                                 <div className="flex flex-wrap lg:justify-end">
                                    <a
                                       href="https://www.contrib.com/signup/firststep?domain=agentdao.com"
                                       className="inline-block py-3 my-1 mr-4 text-base font-medium transition bg-white border border-transparent rounded-md hover:shadow-1 px-7 text-primary hover:text-primary"
                                       >
                                    Earn Tokens
                                    </a>
                                    
                                 </div>
                              </div>
                           </div>
                           <VNOC_newsletter />
                           <div>
                              <span className="absolute top-0 left-0 z-[-1]">
                                 <svg
                                    width="189"
                                    height="162"
                                    viewBox="0 0 189 162"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <ellipse
                                       cx="16"
                                       cy="-16.5"
                                       rx="173"
                                       ry="178.5"
                                       transform="rotate(180 16 -16.5)"
                                       fill="url(#paint0_linear)"
                                       />
                                    <defs>
                                       <linearGradient
                                          id="paint0_linear"
                                          x1="-157"
                                          y1="-107.754"
                                          x2="98.5011"
                                          y2="-106.425"
                                          gradientUnits="userSpaceOnUse"
                                          >
                                          <stop stop-color="white" stop-opacity="0.07" />
                                          <stop offset="1" stop-color="white" stop-opacity="0" />
                                       </linearGradient>
                                    </defs>
                                 </svg>
                              </span>
                              <span className="absolute bottom-0 right-0 z-[-1]">
                                 <svg
                                    width="191"
                                    height="208"
                                    viewBox="0 0 191 208"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <ellipse
                                       cx="173"
                                       cy="178.5"
                                       rx="173"
                                       ry="178.5"
                                       fill="url(#paint0_linear)"
                                       />
                                    <defs>
                                       <linearGradient
                                          id="paint0_linear"
                                          x1="-3.27832e-05"
                                          y1="87.2457"
                                          x2="255.501"
                                          y2="88.5747"
                                          gradientUnits="userSpaceOnUse"
                                          >
                                          <stop stop-color="white" stop-opacity="0.07" />
                                          <stop offset="1" stop-color="white" stop-opacity="0" />
                                       </linearGradient>
                                    </defs>
                                 </svg>
                              </span>
                           </div>
                        </div>
                     
                     


               
            </div>
            
         </div>
         <div  className="w-full px-4 lg:w-1/2 xl:w-5/12">
            <div  className="mt-10 lg:mt-0">
               <span  className="block mb-4 text-lg font-semibold dark:text-socialicon">
               Be Part of the Colony - Where Every Member Matters
               </span>
               <h2
                   className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] capitalize"
                  >
                  <a
                                       href="https://www.contrib.com/signup/firststep?domain=agentdao.com">
                                          Join the {domain} Team: Embrace the Power of Collaboration
                  </a>                        
               </h2>
               <p  className="mb-5 text-base text-body-color dark:text-dark-6">
               At AgentDAO, we draw inspiration from one of nature's most remarkable examples of collective effort and efficiency - the ant. Just as ants work tirelessly for the success of their colony, we at AgentDAO believe in the power of collective intelligence, collaboration, and tireless dedication to achieve groundbreaking results in the realms of Web3 and AI.

               </p>
              
              

               <h2
                   className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]"
                  >
                  Your Role in the Colony
               </h2>
               <p  className="mb-8 text-base text-body-color dark:text-dark-6">
               Collaborative Innovator: Engage in projects where teamwork and creative solutions drive progress.
               </p>

               <p  className="mb-8 text-base text-body-color dark:text-dark-6">
                  Technology Trailblazer: Work with cutting-edge tools in blockchain and AI, pushing the boundaries of what's possible.
               </p>   
               <p  className="mb-8 text-base text-body-color dark:text-dark-6">
                  Community Builder: Help nurture and grow our community, just as ants tirelessly work to support their colony.
               </p>  


            </div>
         </div>
      </div>
   </div>
</section>

</>
  );
};

export default Jointeampage;
