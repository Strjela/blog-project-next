import Image from "next/image";
import config from "../config";
import { Link } from "next-view-transitions";
import { BlogCardProps } from "../types/CardTypes";
import { usePathname } from "next/navigation";

function getColorCategory(category: string) {
  switch (category) {
    case "Destinations":
      return "text-blue-500";
    case "Travel Guides":
      return "text-green-500";
    case "Activities":
      return "text-red-500";
    case "Safety and Training":
      return "text-yellow-500";
    default:
      return "text-gray-500";
  }
}

export default function Card({
  title,
  slug,
  category,
  featureImgUrl,
  description,
}: BlogCardProps) {
  const colorCategory = getColorCategory(category);

  const currentRoute = usePathname();

  console.log(currentRoute);

  const path = currentRoute.startsWith("/blogs/") ? `${slug}` : `blogs/${slug}`;

  return (
    <li className=" flex flex-col sm:flex-row xl:flex-col items-start bg-white rounded-xl shadow-xl  overflow-hidden">
      <div className=" order-1 overflow-hidden p-7 sm:pb-0 sm:pt-0 sm:mt-3 sm:w-[40%] lg:w-[70%] xl:w-auto">
        <h3 className=" text-slate-900 font-semibold text-lg font-jost tracking-wider line-clamp-3 ">
          <span className={`block text-base leading-6  mb-3 ${colorCategory}`}>
            {category}
          </span>
          {title}
        </h3>
        <div className="font-jost text-lg tracking-wider text-slate-600 line-clamp-3">
          <p>{description}</p>
        </div>
        <Link
          className=" xl:mb-6   inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-300 text-slate-700 hover:bg-yellow-400 hover:text-slate-900 focus:ring-slate-500 mt-6"
          href={path}
        >
          Read more
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
      <Link href={path}>
        <Image
          src={`${config.api}${featureImgUrl}`}
          alt=""
          className="  rounded-t-xl sm:rounded-bl-xl sm:rounded-tr-none xl:rounded-t-xl  xl:rounded-b-none w-full      lg:h-[28vh] hover:scale-105 transition duration-500 cursor-pointer object-cover  "
          width={500}
          height={500}
          priority
        />
      </Link>
    </li>
  );
}
