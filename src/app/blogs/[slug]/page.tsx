"use client";

/* import test from "../../../public/images/test.jpg"; */
import Image from "next/image";
import config from "@/app/config";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Newsletter from "@/app/components/layout/Newsletter";
import RecentBlogs from "@/app/components/RecentBlogs";

import bogWave from "../../../../public/images/blogWave.svg";
import qs from "qs";
import useSWR from "swr";
import bgWaveGray from "../../../../public/images/bgWaveGray.svg";
import bgWaveWhite from "../../../../public/images/bgWaveWhite.svg";

interface BlogSiteProps {
  params: {
    slug: string;
  };
}

export default function BlogSite({ params }: BlogSiteProps) {
  const query = qs.stringify({
    populate: "*",
    filters: {
      slug: {
        $eq: params.slug,
      },
    },
  });

  const {
    data: currBlogData,
    error: isErrorCurrBlogData,
    isLoading: isLoadingCurrBlogData,
  } = useSWR(`${config.api}/api/articles?${query}`);

  // Check if data is loading
  if (isLoadingCurrBlogData) {
    return <div>Loading...</div>;
  }

  // Check if there's an error fetching data
  if (isErrorCurrBlogData) {
    return <div>Error loading blog: {isErrorCurrBlogData.message}</div>;
  }

  // Check if data is available
  if (!currBlogData || !currBlogData.data || currBlogData.data.length === 0) {
    return <div>No blog found for slug: {params.slug}</div>;
  }

  const content: BlocksContent = currBlogData?.data[0].attributes.body;

  return (
    <>
      <>
        <div className=" mx-auto  relative">
          <div className="overflow-hidden relative h-[100vh]">
            <Image
              src={`${config.api}${currBlogData.data[0].attributes.FeatureImg.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="test"
              priority
              className=" h-[100vh] absolute w-full object-cover "
            />
            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]" />

            <Image
              priority
              src={bogWave}
              alt="wave"
              className="bottom-0 left-0 w-full absolute"
            />
            <div className="flex justify-center ">
              <div className="absolute w-full h-[100vh] max-w-6xl flex items-end ">
                <div className=" flex gap-5 flex-col pb-44 px-10 font-jost leading-relaxed text-white">
                  <p className="text-xl font-medium ">
                    {currBlogData.data[0].attributes.category.toUpperCase()}
                  </p>
                  <p className="text-2xl  md:text-5xl leading-8 li font-semibold">
                    {currBlogData.data[0].attributes.title.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center font-jost max-w-4xl mx-auto text-center ">
            <p className="leading-loose tracking-wider wear text-2xl font-light">
              {currBlogData.data[0].attributes.description}
            </p>
          </div>

          <div className="flex justify-between border-y border-[#8F93A3] max-w-4xl text-[#8F93A3]  mx-auto my-7 py-3 px-4 ">
            <span>{`Posted ${currBlogData.data[0].attributes.date}`}</span>
            <span>{`${currBlogData.data[0].attributes.readTime} min read`}</span>
          </div>

          <div className="flex justify-start items-center gap-4 max-w-4xl mx-auto">
            <Image
              src={`${config.api}${currBlogData.data[0].attributes.avatar.data.attributes.url}`}
              alt={"Author Image"}
              width={100}
              height={100}
              className="w-20 ml-6 rounded-full shadow-lg"
            />
            <span className="text-[#8F93A3] text-xl ">
              By {currBlogData.data[0].attributes.author}
            </span>
          </div>
          <div className="prose prose-p:text-2xl prose-ul:text-2xl max-w-4xl mx-6 mt-8 lg:mx-auto pb-20   font-jost">
            <h3 className="text-3xl ">
              {currBlogData.data[0].attributes.title}
            </h3>

            <BlocksRenderer content={content} />
          </div>
          <Image
            src={bgWaveGray}
            alt="Background wave gray"
            className="w-max absolute -z-10 left-0 bottom-0 "
          />
        </div>
        <div className="bg-[#f7f7f7] relative z-10">
          <RecentBlogs />
          <Image
            src={bgWaveWhite}
            alt="Background wave white"
            className="w-max absolute -z-10 left-0 bottom-0 "
          />
        </div>

        <Newsletter />
      </>
    </>
  );
}
