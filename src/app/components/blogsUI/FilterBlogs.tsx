"use client";

import React, { useState } from "react";
import { BlogItem } from "../../types/CardTypes";
import SkeletonCards from "../skeletons/skeletonCards";
import Card from "./Card";
import { ApolloError } from "@apollo/client";

interface FilterBlogsPropTypes {
  articles: BlogItem[];
  loading: boolean;
  error: ApolloError | undefined;
}

const FilterBlogs: React.FC<FilterBlogsPropTypes> = ({
  articles,
  loading,
  error,
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  console.log(articles);

  const filteredBlogs = articles.filter((item: BlogItem) =>
    item.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="max-w-7xl mx-auto mt-14 lg:px-8  px-4  bg-white">
        <div>
          <h2 className="text-3xl font-jost mb-8">All Blog Posts</h2>
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search by title"
          className="mb-8 p-3 border font-semibold rounded w-full font-jost md:w-[35%]"
        />
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start ">
          {loading || error ? (
            <SkeletonCards />
          ) : (
            filteredBlogs.map((item: BlogItem) => (
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
        </div>
      </div>
    </>
  );
};

export default FilterBlogs;
