import Image from "next/image";
import test from "../../../public/images/test.jpg";
import Link from "next/link";
import config from "../config";

interface recentBlogCardType {
  title: string;
  slug: string;
  category: string;
  featureImgUrl: string;
}

export default function BlogCard({
  title,
  slug,
  category,
  featureImgUrl,
}: recentBlogCardType) {
  console.log("a", featureImgUrl);

  return (
    <Link href={`blogs/${slug}`}>
      <article className=" border-solid border-[#ABAEBA] border-[1px] rounded-xl max-w-[21rem] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  h-[28rem] overflow-hidden mb-7 hover:cursor-pointer hover:scale-105 transition-all">
        <Image
          src={`${config.api}${featureImgUrl}`}
          width={500}
          height={500}
          alt="Picture of the author"
          className=" rounded-t-xl  w-full object-cover"
          priority
        />
        <div className="m-5 my-6 ">
          <span className="text-xs w-[139px] h-[26px] gap-8 rounded-tl-[4px]  bg-[#E8FFEE] px-[6px] py-[6px] font-inter font-medium leading-6 tracking-tight text-left text-[#005929]">
            {category}
          </span>
          <h3 className="text-3xl my-4">{title}</h3>
        </div>
      </article>
    </Link>
  );
}
