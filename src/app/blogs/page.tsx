"use client";

import useSWR from "swr";
import BlogCard from "../components/BlogCard";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import fetchData from "../getAllBlogs";
import config from "../config";
import { useState } from "react";
import Card from "../components/Card";
import allBlogImage from "../../../public/images/allBlogs.jpg";
import Image from "next/image";
import wawe from "../../../public/images/wave-haikei (1).svg";

const Blogs = () => {
  const [pageIndex, setPageIndex] = useState(1);

  const {
    data,
    error: errorFeatureBlog,
    isLoading: isLoadingRecentBlog,
  } = useSWR(
    `${config.api}/api/articles?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=6`
  );

  return (
    <>
      <div className="  bg-parallax bg-fixed  bg-no-repeat w-full bg-cover bg-center h-[100vh]">
        <Image
          src={wawe}
          alt="wave"
          className="bottom-0 left-0 w-full absolute"
        />
      </div>
      <div className="max-w-7xl mx-auto mt-14 lg:px-8  px-4  bg-white">
        <div>
          <h2 className="text-3xl font-jost mb-8">All Blog Posts</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start ">
          {isLoadingRecentBlog ? (
            <h2>Loading..</h2>
          ) : (
            data.data.map((item: any) => (
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
      <div className="flex justify-center max-w-6xl mt-8 mx-auto font font-jost">
        <div className="space-x-4 space-y-4 text-lg">
          <button
            className={`md:p-2 rounded-xl py-2 text-black p-2 ${
              pageIndex === 1 ? "bg-gray-300" : "bg-blue-400"
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
                : "bg-blue-400"
            }`}
            disabled={pageIndex === (data && data.meta.pagination.pageCount)}
            onClick={() => setPageIndex(pageIndex + 1)}
          >
            Next
          </button>
        </div>
      </div>

      <Newsletter />
    </>
  );
};

export default Blogs;
