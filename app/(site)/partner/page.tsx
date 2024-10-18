import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import Link from "next/link";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export async function generateMetadata(): Promise<Metadata> {
  const c = await getData();
  return {
    // This will override or extend the layout metadata
    title: `Partner With Us - ${c.data.title || c.data.domainName}`,
    description: `${c.data.description}`,
  };
}

export default async function Partnerpage () {
  const c = await getData();
   const domain = getDomain();
  return (
    <>
    <Header c={c}/>
    <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          <div className="w-full px-4 lg:w-6/12">
            <div className="relative mb-12 lg:mb-0">
              <div
                className="mx-auto max-w-[430px] rounded-tl-[50px] sm:rounded-tl-[70px]"
              >
                <img
                  src="/images/about/about-08/image-01.jpg"
                  alt="about image"
                  className="w-full rounded-tl-[50px] sm:rounded-tl-[70px]"
                />
              </div>
              <div
                className="bg-primary absolute bottom-0 right-0 z-10 max-w-[320px] overflow-hidden rounded-tr-[50px] py-10 px-6 text-xl font-bold text-white sm:px-10 sm:text-2xl"
              >
                <div className="text-center">
            <Link href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="inline-block bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark transition-colors duration-300">
                Reach Out for Partnership Inquiries
            </Link>
        </div>

                <div>
                  <span className="absolute left-0 top-0 -z-10">
                    <svg
                      width="115"
                      height="117"
                      viewBox="0 0 115 117"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.1"
                        x="-30.1333"
                        y="20.4912"
                        width="76"
                        height="131.304"
                        transform="rotate(-42.8643 -30.1333 20.4912)"
                        fill="url(#paint0_linear_1408_646)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1408_646"
                          x1="7.8667"
                          y1="20.4912"
                          x2="7.8667"
                          y2="151.795"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute top-0 right-0 -z-10">
                    <svg
                      width="239"
                      height="144"
                      viewBox="0 0 239 144"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.1"
                        x="0.872192"
                        y="-5.28418"
                        width="155.563"
                        height="209.511"
                        transform="rotate(-42.8643 0.872192 -5.28418)"
                        fill="url(#paint0_linear_1408_647)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1408_647"
                          x1="78.6537"
                          y1="-5.28418"
                          x2="78.6537"
                          y2="204.226"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <span className="absolute right-5 bottom-0 -z-10">
                    <svg
                      width="185"
                      height="116"
                      viewBox="0 0 185 116"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        opacity="0.1"
                        x="184.849"
                        y="118.71"
                        width="101.246"
                        height="161.199"
                        transform="rotate(137.136 184.849 118.71)"
                        fill="url(#paint0_linear_1408_648)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_1408_648"
                          x1="235.472"
                          y1="118.71"
                          x2="235.472"
                          y2="279.91"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop
                            offset="1"
                            stop-color="white"
                            stop-opacity="0"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2 2xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <span
                className="text-body-color mb-2 block text-lg font-bold md:mb-4"
              >
                Why Partner with Us
              </span>
              <h1
                className="mb-11 text-3xl font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight md:text-5xl lg:text-4xl lg:leading-tight xl:text-5xl"
              >
                Expand Your Business with Us
              </h1>
              <p>
              Are you looking to integrate our AgentDAO Framework into your business, or do you see a potential for a strategic partnership? We welcome partnerships that enhance the capabilities of any of our agents and expand its utility across different industries.
              </p>

              <div className="mb-8 flex">
                <span
                  className="light:text-primary dark:text-manatee w-full max-w-[45px] pr-4 text-2xl font-bold"
                >
                  01
                </span>
                <div className="w-full">
                  <h3
                    className="mb-4 text-xl font-bold dark:text-neutral1 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Integrations and API Access:
                  </h3>
                  <p className="text-body-color mb-9 text-base">
                  Enhance your services by integrating our framework into your platform.
                  </p>
                </div>
              </div>

              <div className="flex">
                <span
                  className="w-full max-w-[45px] pr-4 text-2xl font-bold"
                >
                  02
                </span>
                <div className="w-full">
                  <h3
                    className="mb-4 text-xl font-bold dark:text-neutral1 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Co-development Projects
                  </h3>
                  <p className="text-body-color mb-9 text-base">
                  Work together on joint ventures that leverage both our strengths.
                  </p>
                </div>
               </div> 
                <div className="flex">
                <span
                  className="w-full max-w-[45px] pr-4 text-2xl font-bold"
                >
                  03
                </span> 
                <div className="w-full">
                  <h3
                    className="mb-4 text-xl font-bold dark:text-neutral1 sm:text-2xl lg:text-xl xl:text-2xl"
                  >
                    Market Expansion:
                  </h3>
                  <p className="text-body-color mb-9 text-base">
                  Help us bring AgentDao to new markets and sectors.
                  </p>
                </div>
               </div> 
              

                <div className="mt-8 md:mt-10">
                    <a href={`https://domaindirectory.com/servicepage/?domain=${domain}`} className="inline-block bg-primaryho text-white font-bold py-2 px-4 rounded hover:bg-primaryhover transition-colors duration-300">
                        Partner with Us
                    </a>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer domain={c.data.domainName.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} />

    </>
  );
};


