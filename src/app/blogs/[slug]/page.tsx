import Image from "next/image";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Newsletter from "@/app/components/layout/Newsletter";
import RecentBlogs from "@/app/components/blogsUI/RecentBlogs";

import blogWave from "../../../../public/images/blogWave.svg";
import bgWaveGray from "../../../../public/images/bgWaveGray.svg";
import bgWaveWhite from "../../../../public/images/bgWaveWhite.svg";
import "react-quill/dist/quill.snow.css";
import { query } from "@/app/services/ApolloClient";
import { GET_ARTICLE } from "@/app/services/querys";

interface BlogSiteProps {
  params: {
    slug: string;
  };
}

export default async function BlogSite({ params }: BlogSiteProps) {
  const { data, error, loading } = await query({
    query: GET_ARTICLE,
    variables: { slug: params.slug },
  });

  const contents: BlocksContent = data?.articles?.data[0]?.attributes.body;

  // Check if data is loading
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if there's an error fetching data
  if (error) {
    return <div>Error loading blog: {error.message}</div>;
  }

  // Check if data is available
  if (
    !data.articles ||
    !data.articles.data ||
    data.articles.data.length === 0
  ) {
    return <div>No blog found for slug: {params.slug}</div>;
  }

  return (
    <>
      <>
        <div className=" mx-auto  relative">
          <div className="overflow-hidden relative h-[100vh]">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${data.articles.data[0].attributes.FeatureImg.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="test"
              priority
              className=" h-[100vh] absolute w-full object-cover "
            />
            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]" />

            <Image
              priority
              src={blogWave}
              alt="wave"
              className="bottom-0 left-0 w-full absolute"
            />
            <div className="flex justify-center ">
              <div className="absolute w-full h-[100vh] max-w-6xl flex items-end ">
                <div className=" flex gap-5 flex-col pb-44 px-10 font-jost leading-relaxed text-white">
                  <p className="text-xl font-medium ">
                    {data.articles.data[0].attributes.category.toUpperCase()}
                  </p>
                  <p className="text-2xl  md:text-5xl leading-8 li font-semibold">
                    {data.articles.data[0].attributes.title.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center font-jost max-w-4xl mx-auto text-center ">
            <p className="leading-loose tracking-wider wear text-2xl font-light">
              {data.articles.data[0].attributes.description}
            </p>
          </div>

          <div className="flex justify-between border-y border-[#8F93A3] max-w-4xl text-[#8F93A3]  mx-auto my-7 py-3 px-4 ">
            <span>{`Posted ${data.articles.data[0].attributes.date}`}</span>
            <span>{`${data.articles.data[0].attributes.readTime} min read`}</span>
          </div>

          <div className="flex justify-start items-center gap-4 max-w-4xl mx-auto">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}${data.articles.data[0].attributes.avatar.data.attributes.url}`}
              alt={"Author Image"}
              width={100}
              height={100}
              className="w-20 ml-6 rounded-full shadow-lg"
            />
            <span className="text-[#8F93A3] text-xl ">
              By {data.articles.data[0].attributes.author}
            </span>
          </div>
          <div className="prose prose-p:text-2xl prose-ul:text-2xl max-w-4xl mx-6 mt-8 lg:mx-auto pb-20   font-jost">
            <h3 className="text-3xl ">
              {data.articles.data[0].attributes.title}
            </h3>

            <BlocksRenderer content={contents} />
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
