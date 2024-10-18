import RelatedPost from "@/components/Blog/RelatedPost";
import SharePost from "@/components/Blog/SharePost";
import { imageBuilder, getPostBySlug, getBlogPostById } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { structuredAlgoliaHtmlData } from "@/app/libs/crawlIndex";
import { BlogPost } from "@/types/blog";
import Categories from "@/components/Blog/Categories";
import Link from "next/link";
import { getData, getDomain } from '@/lib/data';
import Header from "@/components/Header";

import { integrations } from "@/integration.config";
import LoadingState from '@/components/Includes/LoadingState';
import Footer from "@/components/Footer";

type Props = {
  params: { slug: string };
};

const getBlogId = (params: any) => {
  const  id  = params.split('---')[1];
  return id;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = params;
  const id = getBlogId(slug);
  const post: BlogPost = await getBlogPostById(id);
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;
  const src = "data:image/jpeg;base64,";
  
  if (post) {
    
    return {
      title: `${post.title || "Single Post Page"} | ${siteName}`,
      description: `${post.title?.slice(0, 136)}...`,
      author: authorName,

      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: false,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },

      openGraph: {
        title: `${post.title} `,
        description: post.title,
        url: `${siteURL}/blogpost/${post?.slug+`---${post?.id}`}`,
        siteName: siteName,
        images: [
          {
            url: src+post.image_base64,
            width: 1800,
            height: 1600,
            alt: post.title,
          },
        ],
        locale: "en_US",
        type: "article",
      },

      twitter: {
        card: "summary_large_image",
        title: `${post.title} | ${siteName}`,
        description: `${post.title?.slice(0, 136)}...`,
        creator: `@${authorName}`,
        site: `@${siteName}`,
        images: [src+post.image_base64],
        url:  `${siteURL}/blogpost/${post?.slug+`---${post?.id}`}`,
      },
    };
  } else {
    return {
      title: "Not Found",
      description: "No blog article has been found",
    };
  }
}

const SingleBlogPage = async ({ params }: Props) => {
    const { slug } = params;
    const id = getBlogId(slug);
   
  const src = "data:image/jpeg;base64,";
  const siteURL = process.env.SITE_URL;
  const siteName = process.env.SITE_NAME;
  const authorName = process.env.AUTHOR_NAME;
  const c = await getData();
  const domain = getDomain();
  

  const post: BlogPost = await getBlogPostById(id);


  await structuredAlgoliaHtmlData({
    type: "blog",
    title: post?.title || "",
    htmlString: post?.title || "",
    pageUrl: `${siteURL}/blogpost/${post?.slug+`---${post?.id}`}`,
    imageURL: src+post.image_base64,
  });
  if (post) {
  return (
    <>
    <Header c={c}/>
      <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="md:w-1/2 lg:w-[32%]">
              <div className="animate_top mb-10 rounded-md border border-stroke bg-white p-3.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
                <form
                  action="https://formbold.com/s/unique_form_id"
                  method="POST"
                >
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search Here..."
                      className="w-full rounded-lg border border-stroke px-6 py-4 shadow-solid-12 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />

                    <button
                      className="absolute right-0 top-0 p-5"
                      aria-label="search-icon"
                    >
                      <svg
                        className="fill-black transition-all duration-300 hover:fill-primary dark:fill-white dark:hover:fill-primary"
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

             
            </div>

            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                
                <div className="blog-details">

                <div dangerouslySetInnerHTML={{ __html: post.content }} />
                 
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer domain={c.data.domainName.replace(/(^\w|\s\w)/g, m => m.toUpperCase())} />
    </>
  );
    } else{
        return (
            <>
              <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
              <LoadingState />
              </section>
              </>)
    }
};


export default SingleBlogPage;
