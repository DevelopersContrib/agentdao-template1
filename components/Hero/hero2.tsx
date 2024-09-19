"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import "./HeroStyle.css";

const Hero2 = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center relative z-10 overflow-hidden pt-25 md:pt-25 xl:pt-25">
        <div className="mt-12 pt-12 mb-8 px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-12/12 xl:w-12/12 md:text-center ">
            <h1 className="light:text-primary dark:text-white border-txtgrad2 animate-once animate-jump mb-8 font-extrabold leading-none tracking-normal md:text-8xl md:tracking-tight">
              Autonomous Agent Frameworks
            </h1>
            <p className="px-0 mb-8 text-lg md:text-xl lg:px-24">
              AgentDAO is a network of autonomous smart agents built on URLs
              that build, manage and monetize a network of specialized and
              personalized agents. Using a URL strategy, AgentDAO is building
              network of smart agents at the edge, interoperable and digital
              native with professional eservices.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <Link
                href="/betaapply"
                target="_blank"
                className="shadow-2xl shadow-accent2 inline-flex items-center justify-center bg-primarythree hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
              >
                Apply Today
              </Link>
              <Link
                href="/about"
                target="_blank"
                className="inline-flex items-center justify-center bg-gray hover:bg-primaryho ease-in-out duration-300 text-white text-regular rounded-full py-2.5 px-7.5"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero2;
