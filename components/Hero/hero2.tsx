"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import VNOC_newsletter from "../Forms/newsletter";
import "./HeroStyle.css";



const Hero2 = ({domain}) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="h-screen flex items-center justify-center relative z-10 overflow-hidden pt-25 md:pt-25 xl:pt-25">
        <div className="mt-12 pt-12 mb-8 px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-12/12 xl:w-12/12 md:text-center ">
            <h1 className="dark:text-white capitalize border-txtgrad2 animate-once animate-jump mb-8 font-extrabold leading-none tracking-normal md:text-8xl ">
              Welcome to {domain}
            </h1>
            <p className="px-0 mb-8 text-lg md:text-xl lg:px-24">
              <span className="capitalize">{domain}</span>
              &nbsp; is part of <b><a href="https://agentdao.com">the AgentDao Network</a> </b>,
              a network of autonomous smart agents built on URLs
              that build, manage and monetize a network of specialized and
              personalized agents.
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <VNOC_newsletter />
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
