"use client";
import { imageBuilder } from "@/sanity/sanity-utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
    id: number;
    title: string;
    slug?: any;
    image_base64: string;
    image_caption: string;
    tags?: string;
  };

const BlogPost = ({ blog }: { blog: BlogPost}) => {
  const src = "data:image/jpeg;base64,";
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top group rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link
          href={`/blogpost/${blog.slug+'---'+blog.id}`}
          className="relative block aspect-[368/239] overflow-hidden rounded-lg"
        >
          {blog.image_base64 ? (
            <Image
              src={src+blog.image_base64}
              alt={blog.image_caption}
              fill
              className="duration-300 group-hover:scale-110"
            />
          ) : (
            "No image"
          )}
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 text-lg font-medium text-black hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/blogpost/${blog.slug+'---'+blog.id}`}>
              {`${blog.title.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{blog.title}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPost;
