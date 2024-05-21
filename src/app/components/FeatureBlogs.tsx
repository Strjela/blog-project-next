"use client";

import Image from "next/image";
import config from "../config";
import useSWR from "swr";
import bgWaveWhite from "../../../public/images/bgWaveWhite.svg";
import Card from "./Card";
import qs from "qs";
import { BlogItem } from "../types/CardTypes";

const query = qs.stringify({
  populate: ["FeatureImg"], // Specify the relationships to populate
  fields: ["title", "slug", "category", "description"], // Specify the fields to include
  filters: { isFeatured: { $eq: true } },
  pagination: {
    limit: 3, // Limit the number of results to 3
  },
});

export default function FeaturedBlogs() {
  const {
    data: featureBlog,
    error: errorFeatureBlog,
    isLoading: isLoadingFeatureBlog,
  } = useSWR(`${config.api}/api/articles?${query}`);

  return (
    <div className="bg-[#f7f7f7]">
      <main className="flex  justify-center  flex-col mx-auto px-6 bg-[#f7f7f7] pt-10">
        <div className="max-w-6xl  mx-auto z-20">
          <h2 className=" text-[#73778C]  text-3xl  font-normal px-8 font-jost tracking-wider leading-10">
            Featured Post
          </h2>

          <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 font-jost pb-36 ">
            {isLoadingFeatureBlog ? (
              <h2>Loading..</h2>
            ) : (
              featureBlog.data.map((item: BlogItem) => (
                <Card
                  key={item.id} // Assuming 'id' is a unique identifier
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
