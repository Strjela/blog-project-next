"use client";

import useSWR from "swr";
import config from "../config";
import CategoryCard from "./CategoryCard";
import qs from "qs";

const query = qs.stringify({
  populate: ["FeatureImg"], // Specify the relationships to populate
  fields: ["title", "slug", "category"], // Specify the fields to include
  filters: { isCategory: { $eq: true } },
  pagination: {
    limit: 3, // Limit the number of results to 3
  },
});

export default function CategoryLandingPage() {
  const {
    data: categoryBlog,
    error: errorCategoryBlog,
    isLoading: isLoadingCategoryBlog,
  } = useSWR(
    `${config.api}/api/articles?populate=*&filters[isCategory][$eq]=true`
  );

  return (
    <>
      <div className="font-jost flex flex-col justify-center h-full items-center text-center mx-auto px-5 my-8 lg:my-16">
        <h5 className="text-lg text-yellow-500 font-medium tracking-wider ">
          CATEGORIES
        </h5>
        <p className="text-3xl lg:text-4xl font-normal my-6 tracking-wider  ">
          Take an epic road trip through deserts, mountains & canyons
        </p>
        <p className="text-lg lg:text-xl font-light tracking-widest">
          Experience sublime scenery, wildlife encounters and diverse cultures
          on our favourite road trips and adventures.
        </p>
      </div>
      <div className="grid p-4 gap-4 lg:p-0 lg:gap-0 lg:grid-cols-2 lg:grid-rows-2 shadow-2xl  ">
        {isLoadingCategoryBlog ? (
          <h2>Loading..</h2>
        ) : (
          categoryBlog.data.map((item: any) => (
            <CategoryCard
              key={item.id} // Assuming 'id' is a unique identifier
              title={item.attributes.title}
              slug={item.attributes.slug}
              featureImgUrl={item.attributes.FeatureImg.data.attributes.url}
            />
          ))
        )}
      </div>
    </>
  );
}
