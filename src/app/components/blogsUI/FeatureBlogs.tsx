import Image from "next/image";
import bgWaveWhite from "../../../../public/images/bgWaveWhite.svg";
import Card from "./Card";
import { BlogItem } from "../../types/CardTypes";
import SkeletonCards from "../skeletons/skeletonCards";
import { query } from "../../services/ApolloClient";
import { GET_FEATURED_ARTICLES } from "../../services/querys";

export default async function FeaturedBlogs() {
  const { data, error, loading } = await query({
    query: GET_FEATURED_ARTICLES,
  });

  return (
    <div className="bg-[#f7f7f7]">
      <main className="flex  justify-center  flex-col mx-auto px-6 bg-[#f7f7f7] pt-10">
        <div className="max-w-6xl  mx-auto z-20">
          <h2 className=" text-[#73778C]  text-3xl  font-normal px-8 font-jost tracking-wider leading-10">
            Featured Post
          </h2>

          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 font-jost pb-36 ">
            {loading || error ? (
              <SkeletonCards />
            ) : (
              data.articles.data.map((item: BlogItem) => (
                <Card
                  key={item.id}
                  title={item.attributes.title}
                  slug={item.attributes.slug}
                  category={item.attributes.category}
                  featureImgUrl={item.attributes.FeatureImg.data.attributes.url}
                  description={item.attributes.description}
                />
              ))
            )}
          </ul>
        </div>
      </main>
      <div className="relative w-full z-10">
        <Image
          src={bgWaveWhite}
          alt="landingWave"
          className="w-max absolute left-0 bottom-0"
        />
      </div>
    </div>
  );
}
