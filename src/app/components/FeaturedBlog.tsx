import Image from "next/image";
import test from "../../../public/images/test.jpg";
import fetchData from "../getAllBlogs";
import config from "../config";
import Link from "next/link";

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

export default function FeatureBlogCard(props: any) {
  return (
    <div className=" mx-4  lg:px-8 mt-7">
      <h2 className=" text-[#73778C] w-[264px] text-3xl leading-10 font-normal my-4">
        Featured Post
      </h2>
      <Link href={`blogs/${props.props.data[0].attributes.slug}`}>
        <article className="border-solid border-[#ABAEBA] border-[1px] rounded-xl bg-white  sm:h-[18rem] m-w-[22rem] sm:flex  hover:cursor-pointer hover:scale-105 transition-all shadow-[0_4px_9px_-4px_#dc4c64]">
          <div className="m-5 my-6 max-w-[20rem]">
            <span className="text-xs w-[139px] h-[26px] gap-8 rounded-tl-[4px]  bg-[#E8FFEE] px-[6px] py-[6px] font-inter font-medium leading-6 tracking-tight text-left text-[#005929]">
              {props.props.data[0].attributes.category}
            </span>
            <h3 className="text-3xl my-4">
              {props.props.data[0].attributes.title}
            </h3>
            <div className="text-[#73778C]">
              {formatDate(props.props.data[0].attributes.date)}
              {" · "}
              {props.props.data[0].attributes.readTime}
              {"min"}
            </div>
          </div>
          <Image
            src={`${config.api}${props.props.data[0].attributes.FeatureImg.data.attributes.url}`}
            width={500}
            height={500}
            alt="Picture of the author"
            className="  rounded-bl-xl rounded-br-xl  sm:rounded-tr-xl sm:rounded-bl-none w-full h-auto object-cover "
            priority
          />
        </article>
      </Link>
    </div>
  );
}
