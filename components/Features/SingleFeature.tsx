import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, description, links } = feature;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border border-gray shadow-solid-3 rounded-lg xl:p-3 transition-all hover:shadow-solid-10 dark:hover:bg-hoverdark dark:border-strokedark dark:bg-primary z-40"
      >
        <div className="flex flex-row items-center p-2 text-center">
          <Image
            src={icon}
            alt={title}
            width="50"
            height="50"
            className="p-2 mr-2 rounded-lg light:bg-primary dark:bg-manatee"
          />
          <Link href={`/agents/${title}`}>
            <h3 className="font-semibold text-xl xl:text-itemtitle text-primary dark:text-white mt-4.5 mb-5 text-right">
              {title}
            </h3>
          </Link>
        </div>
        <div className="pl-2 pt-1 pr-2 pb-1">
          <p className="text-pretty text-left mb-3 pl-1 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>

          {links}
        </div>
      </motion.div>
    </>
  );
};

export default SingleFeature;
