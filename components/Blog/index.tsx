"use client";

import { useEffect, useState } from "react";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogPost from "./BlogPost";
import LoadingState from "@/components/Includes/LoadingState";

const Blog = () => {
  const [blogPosts, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const src = "data:image/jpeg;base64,";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/blogs", {
        next: { revalidate: 3600 },
      });
      console.log(response);
      if (response.ok) {
        const res = await response.json();
        setBlogs(res.blogs);
        setIsLoading(false);

        if (res.status) {
          console.log("done....");
        }
      } else {
        alert("An error occurred");
      }
    };
    fetchData();
  }, []);

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      {blogPosts.length > 0 && (
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `NEWS & BLOGS`,
              subtitle: `Latest News & Blogs`,
              description: `Stay updated with the latest insights, trends, and news from our industry through our curated blog and news section.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>
      )}

      {blogPosts.length > 0 && (
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-15 xl:px-0">
          {isLoading ? (
            <LoadingState />
          ) : (
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {blogPosts.map((blog, index) => (
                <BlogPost blog={blog} key={index} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Blog;
