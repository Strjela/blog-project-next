"use client";

import useSWR from "swr";
import Newsletter from "../components/layout/Newsletter";
import config from "../config";
import { useState } from "react";
import Card from "../components/Card";
import Image from "next/image";
import allBlogsWave from "../../../public/images/allBlogsWave.svg";
import { BlogItem } from "../types/CardTypes";
import qs from "qs";
import SkeletonCards from "../components/skeletons/skeletonCards";

const getBlogData = qs.stringify({
  populate: ["FeatureImg"], // Specify the relationships to populate
  fields: ["title", "slug", "category", "description"], // Specify the fields to include
});

const Blogs = () => {
  /* const [pageIndex, setPageIndex] = useState(1); */
  const [searchQuery, setSearchQuery] = useState("");

  const {
    data,
    error: isErrorCurrBlog,
    isLoading: isLoadingBlogs,
  } = useSWR(`${config.api}/api/articles?${getBlogData}`);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBlogs = data?.data.filter((item: BlogItem) =>
    item.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="  bg-parallax bg-fixed  bg-no-repeat w-full bg-cover bg-center h-[100vh]">
        <Image
          src={allBlogsWave}
          alt="wave"
          className="bottom-0 left-0 w-full absolute"
        />
      </div>
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
          {isLoadingBlogs || isErrorCurrBlog ? (
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
      {/*    <div className="flex justify-center max-w-6xl mt-8 mx-auto font font-jost">
        <div className="space-x-4 space-y-4 text-lg">
          <button
            className={`md:p-2 rounded-xl py-2 text-black p-2 ${
              pageIndex === 1 ? "bg-gray-300" : "bg-yellow-400"
            }`}
            disabled={pageIndex === 1}
            onClick={() => setPageIndex(pageIndex - 1)}
          >
            {" "}
            Previous
          </button>
          <span>{`${pageIndex} of ${
            data && data.meta.pagination.pageCount
          }`}</span>
          <button
            className={`md:p-2 rounded-xl py-2 text-black p-2 ${
              pageIndex === (data && data.meta.pagination.pageCount)
                ? "bg-gray-300"
                : "bg-yellow-400"
            }`}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
      </div> */}

      <Newsletter />
    </>
  );
};

export default Blogs;
