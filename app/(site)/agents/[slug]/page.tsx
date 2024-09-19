import { useRouter } from "next/navigation";
import Image from "next/image";
import featuresData from "@/components/Features/featuresData";
import Link from "next/link";

export default function AgentPage({ params }) {
  const { slug } = params;
  const feature = featuresData.find((item) => item.title === params.slug);

  if (!feature) {
    return (
      <>
        <div className="pt-40 pb-20">
          <h1>{slug} is not part of our Agent Assets</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <section className="h-screen flex items-center justify-center relative z-10 overflow-hidden pt-25 md:pt-20 xl:pt-15">
        <div className="mt-1 pt-1 mb-8 px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-12/12 xl:w-12/12 md:text-center">
            {feature.image && (
              <Image
                src={feature.image}
                alt={feature.title}
                width="700"
                height="500"
              />
            )}
            <Image
              src={feature.icon}
              alt={feature.title}
              width="50"
              height="50"
            />
            <h1 className="mb-8 font-extrabold text-black dark:text-white leading-none tracking-normal md:text-8xl md:tracking-tight">
              {params.slug}
            </h1>
            <p className="px-0 mb-8 text-lg md:text-xl lg:px-24">
              {feature.description}
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              {feature.links}
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen flex items-center justify-center relative z-10 pt-25 md:pt-20 xl:pt-15">
        <div className="mt-1 pt-1 mb-8 px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h2 className="mb-8 font-extrabold text-primaryho dark:text-white leading-none tracking-normal md:text-6xl md:tracking-tight">
              Contribute to {params.slug}
            </h2>
            <p className="px-0 mb-8 text-lg md:text-xl lg:px-24">
              Interested in shaping the future of {params.slug}? We're looking
              for developers, strategists, and enthusiasts to contribute their
              expertise and insights. Whether you're a coder, a designer, or a
              digital service innovator, your skills can help enhance{" "}
              {params.slug}'s capabilities.
            </p>
            <h3 className="mb-8 font-extrabold text-primaryho dark:text-white leading-none tracking-normal md:text-4xl md:tracking-tight">
              How to contribute and earn tokens
            </h3>

            <div className="flex gap-4">
              <div className="flex-1">
                <ul className="text-left">
                  <li>
                    <b>🔍 Step 1: Explore the Agent:</b> Understand what{" "}
                    {params.slug}does and its role within our ecosystem by
                    visiting our detailed documentation or project repositories.
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <ul className="text-left">
                  <li>
                    <b>🎯 Step 2: Identify Improvements:</b> Think of new
                    features, efficiency boosts, or bug fixes. Check out our
                    roadmap to see what’s in progress and where you can add the
                    most value.
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <ul className="text-left">
                  <li>
                    <b>🤝 Step 3: Get Involved:</b> Join our community on
                    GitHub, submit a pull request, or discuss your ideas on our
                    community forums.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 md:mt-10">
              <a
                href="https://contrib.com/to/agentdao"
                className="inline-block mr-5 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primaryho transition-colors duration-300"
              >
                Contribute Now
              </a>
              Or
              <a
                href="/partner"
                className="inline-block ml-5 bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primaryho transition-colors duration-300"
              >
                Partner
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
