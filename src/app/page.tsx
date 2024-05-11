"use client";

import Link from "next/link";
import Hero from "./components/Hero";
import Image from "next/image";
import test from "../../public/images/test.jpg";
import sky from "../../public/images/skyKont.jpg";
import BlogCard from "./components/BlogCard";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import FeatureBlogCard from "./components/FeaturedBlog";
import fetchData from "./getAllBlogs";
import config from "./config";
import useSWR from "swr";
import { useEffect } from "react";
import banner from "../../public/images/banner-logos.jpg.webp";
import aboutImg from "../../public/images/pexels-chiecharon-705075.jpg";
import landingWave from "../../public/images/landingWave.svg";
import landingWhite from "../../public/images/landingWhite.svg";

import Card from "./components/Card";
import { IoIosNavigate } from "react-icons/io";
import CategoryCard from "../app/components/CategoryCard";

export default function Home() {
  /*  const [featureBlog, allBlogs] = await Promise.all([
    await fetchData("filters[isFeatured][$eq]=true"),
    await fetchData("filters[isFeatured][$eq]=false"),
  ]); */

  /* console.log("aa", featureBlog.data[0]); */
  /* const blogs = allBlogs.data; */

  const {
    data: featureBlog,
    error: errorFeatureBlog,
    isLoading: isLoadingFeatureBlog,
  } = useSWR(
    `${config.api}/api/articles?populate=*&filters[isFeatured][$eq]=true`
  );

  const {
    data: recentBlog,
    error: errorRecentBlog,
    isLoading: isLoadingRecentBlog,
  } = useSWR(
    `${config.api}/api/articles?articles?sort=id:desc&_imit=3&populate=*&filters[isFeatured][$eq]=false&filters[isCategory][$eq]=false`
  );
  const {
    data: categoryBlog,
    error: errorCategoryBlog,
    isLoading: isLoadingCategoryBlog,
  } = useSWR(
    `${config.api}/api/articles?populate=*&filters[isCategory][$eq]=true`
  );

  if (errorFeatureBlog) return <div>Failed to fetch users.</div>;

  return (
    <>
      <Hero />
      <div className="flex justify-center mt-5">
        <Image src={banner} alt="banner" priority />
      </div>
      <div className="mt-14 px-4 flex justify-center relative ">
        <div className=" flex justify-center flex-wrap text-center max-w-screen-lg">
          <div>
            <h4 className="font-jost text-4xl  tracking-wider">
              Welcome to SkyAdventure
            </h4>
            <p className="font-jost text-xl xl:text-2xl text-center text-slate-600 my-7 xl:mb-24 tracking-wider leading-10">
              SkyAdventure is a comprehensive platform dedicated to empowering
              travelers with the knowledge and inspiration to embark on
              unforgettable journeys, offering a diverse array of travel guides,
              destination recommendations, and insider insights.
            </p>
          </div>
          <Image
            src={aboutImg}
            alt="about image"
            className="rounded-2xl z-20 "
          />
        </div>
        <Image
          src={landingWave}
          alt="landingWave"
          className="w-max absolute left-0 bottom-0 "
        />
      </div>

      <div className="bg-[#f7f7f7] pt-28 pb-16">
        <div className=" px-4 mx-auto max-w-5xl flex bg-[#f7f7f7] items-center  text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-2 after:flex-1 after:border-t after:border-gray-300 after:ms-2">
          <IoIosNavigate size={50} />
        </div>
      </div>

      <div className="bg-[#f7f7f7]">
        <main className="flex  justify-center  flex-col mx-auto px-6 bg-[#f7f7f7] pt-10">
          <div className="max-w-6xl  mx-auto z-20">
            <h2 className=" text-[#73778C]  text-3xl  font-normal px-8 font-jost tracking-wider leading-10">
              Featured Post
            </h2>

            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 font-jost pb-36 ">
              {isLoadingRecentBlog ? (
                <h2>Loading..</h2>
              ) : (
                featureBlog.data.map((item: any) => (
                  <Card
                    key={item.id} // Assuming 'id' is a unique identifier
                    title={item.attributes.title}
                    slug={item.attributes.slug}
                    category={item.attributes.category}
                    featureImgUrl={
                      item.attributes.FeatureImg.data.attributes.url
                    }
                    description={item.attributes.description}
                  />
                ))
              )}
            </ul>
          </div>
        </main>
        <div className="relative w-full z-10">
          <Image
            src={landingWhite}
            alt="landingWave"
            className="w-max absolute left-0 bottom-0"
          />
        </div>

        {/* Recent blog */}
        {/* <div className=" flex justify-between px-8">
            <h2 className=" text-[#73778C]  text-3xl leading-10 font-normal font-jost ">
              Recent Posts
            </h2>
            <Link href={"/blogs"}>
              <button className="font-medium text-black bg-none border-none outline-none shadow-none">
                See All
              </button>
            </Link>
          </div> */}
        {/* ARTICEL */}
        {/*    <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 font-jost ">
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
          </ul> */}
      </div>
      <div className="  ">
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
      </div>

      {/* Recent posts */}
      <div className="max-w-6xl mx-auto mt-24">
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

      <Newsletter />
    </>
  );
}
