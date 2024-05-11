import aboutImg from "../../../public/images/holly-mandarich-UVyOfX3v0Ls-unsplash.jpg";
import Image from "next/image";
import config from "../config";
import Link from "next/link";

interface recentBlogCardType {
  title: string;
  slug: string;
  category: string;
  featureImgUrl: string;
  description: string;
}

export default function Card({
  title,
  slug,
  category,
  featureImgUrl,
  description,
}: recentBlogCardType) {
  return (
    <li className=" flex flex-col sm:flex-row xl:flex-col items-start bg-white rounded-xl shadow-xl  overflow-hidden">
      <div className=" order-1 overflow-hidden p-7 sm:pb-0 sm:pt-0 sm:mt-3">
        <h3 className=" text-slate-900 font-semibold text-lg font-jost tracking-wider line-clamp-3 ">
          <span className=" block text-base leading-6 text-indigo-500 mb-3 ">
            {category}
          </span>
          {title}
        </h3>
        <div className="font-jost text-lg tracking-wider text-slate-600 line-clamp-3">
          <p>{description}</p>
        </div>
        <Link
          className=" xl:mb-6   inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-300 text-slate-700 hover:bg-yellow-400 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href={`blogs/${slug}`}
        >
          Learn more
          <svg
            className="overflow-visible ml-3 text-slate-600 group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        </Link>
      </div>

      <Image
        src={`${config.api}${featureImgUrl}`}
        alt=""
        className="  rounded-t-xl sm:rounded-bl-xl sm:rounded-tr-none xl:rounded-t-xl  xl:rounded-b-none w-full sm:w-[55vw]  sm:h-full   lg:h-[28vh] hover:scale-105 transition duration-500 cursor-pointer object-cover  "
        width={500}
        height={500}
        loading="lazy"
      />
    </li>

    /*  <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <Image
          className="rounded-t-lg max-h-56 w-full object-cove"
          src={`${config.api}${featureImgUrl}`}
          width={500}
          height={500}
          alt=""
        />

        <div className="p-5">
          <a href="#">
            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
    </div> */
  );
}
