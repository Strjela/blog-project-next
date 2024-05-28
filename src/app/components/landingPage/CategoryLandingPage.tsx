"use client";

import useSWR from "swr";
import config from "../../config";
import CategoryCard from "./CategoryCard";
import qs from "qs";
import { CategoryBlogItem } from "../../types/CategoryPostTypes";

const getCategoryBlogs = qs.stringify({
  populate: ["FeatureImg"],
  fields: ["title", "slug", "category"],
  filters: { isCategory: { $eq: true } },
});

export default function CategoryLandingPage() {
  const {
    data: categoryBlog,
    error: errorCategoryBlog,
    isLoading: isLoadingCategoryBlog,
  } = useSWR(`${config.api}/api/articles?${getCategoryBlogs}`);

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
          categoryBlog.data.map((item: CategoryBlogItem) => (
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
