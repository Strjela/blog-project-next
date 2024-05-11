/* import test from "../../../public/images/test.jpg"; */
import Image from "next/image";
import fetchData from "@/app/getAllBlogs";
import config from "@/app/config";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Newsletter from "@/app/components/Newsletter";

import bogWave from "../../../../public/images/blogWave.svg";

const a = "https://mdbcdn.b-cdn.net/img/new/avatars/1.webp";

export default async function BlogSite(prop: any) {
  const currBlog = await fetchData(`filters[slug][$eq]=${prop.params.slug}`);

  const content: BlocksContent = currBlog.data[0].attributes.body;

  return (
    <>
      <>
        <div className=" mx-auto sm:mb-60 ">
          <div className="overflow-hidden relative h-[100vh]">
            <Image
              src={`${config.api}${currBlog.data[0].attributes.FeatureImg.data.attributes.url}`}
              width={1000}
              height={1000}
              alt="test"
              priority
              className=" h-[100vh] absolute w-full object-cover "
            />
            <div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]" />

            <Image
              src={bogWave}
              alt="wave"
              className="bottom-0 left-0 w-full absolute"
            />
            <div className="flex justify-center ">
              <div className="absolute w-full h-[100vh] max-w-6xl flex items-end ">
                <div className=" flex gap-5 flex-col pb-44 px-10 font-jost leading-relaxed text-white">
                  <p className="text-xl font-medium ">
                    {currBlog.data[0].attributes.category.toUpperCase()}
                  </p>
                  <p className="text-2xl  md:text-5xl leading-8 li font-semibold">
                    {currBlog.data[0].attributes.title.toUpperCase()}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center font-jost max-w-4xl mx-auto text-center ">
            <p className="leading-loose tracking-wider wear text-2xl font-light">
              {currBlog.data[0].attributes.description}
            </p>
          </div>

          <div className="flex justify-between border-y border-[#8F93A3] max-w-4xl text-[#8F93A3]  mx-auto my-7 py-3 px-4 ">
            <span>{`Posted ${currBlog.data[0].attributes.date}`}</span>
            <span>{`${currBlog.data[0].attributes.readTime} min read`}</span>
          </div>

          <div className="flex justify-start items-center gap-4 max-w-4xl mx-auto">
            <Image
              src={`${config.api}${currBlog.data[0].attributes.avatar.data.attributes.url}`}
              alt={"Author Image"}
              width={100}
              height={100}
              className="w-20 ml-6 rounded-full shadow-lg"
            />
            <span className="text-[#8F93A3] text-xl ">
              By {currBlog.data[0].attributes.author}
            </span>
          </div>
          <div className="prose prose-p:text-2xl prose-ul:text-2xl max-w-4xl mx-6 mt-8 lg:mx-auto mb-8 xl:mb-36 font-jost">
            <h3 className="text-3xl mb-4">
              {/* Tu ide naslov */}
              {currBlog.data[0].attributes.title}
            </h3>

            <BlocksRenderer content={content} />
          </div>
        </div>
        <Newsletter />
      </>
    </>
  );
}
