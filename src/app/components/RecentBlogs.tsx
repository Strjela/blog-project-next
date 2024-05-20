"use client";

import config from "../config";
import Link from "next/link";
import useSWR from "swr";
import Card from "./Card";
import qs from "qs";

const query = qs.stringify({
  populate: ["FeatureImg"], // Specify the relationships to populate
  fields: ["title", "slug", "category", "description"], // Specify the fields to include
  filters: { isCategory: { $eq: false } },
  pagination: {
    limit: 3, // Limit the number of results to 3
  },
});

export default function RecentBlogs() {
  const {
    data: recentBlog,
    error: errorRecentBlog,
    isLoading: isLoadingRecentBlog,
  } = useSWR(`${config.api}/api/articles?${query}`);

  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className=" flex justify-between px-8">
        <h2 className=" text-[#73778C]  text-3xl leading-10 font-normal font-jost ">
          Recent Posts
        </h2>
        <Link href={"/blogs"}>
          <button className="font-medium text-black bg-none border-none outline-none shadow-none">
            See All
          </button>
        </Link>
      </div>
      <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 font-jost pb-36 ">
        {isLoadingRecentBlog ? (
          <h2>Loading..</h2>
        ) : (
          recentBlog.data.map((item: any) => (
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
  );
}
