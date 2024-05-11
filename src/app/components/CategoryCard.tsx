import test from "../../../public/images/test.jpg";
import sky from "../../../public/images/pexels-chiecharon-705075.jpg";

import Image from "next/image";
import { title } from "process";
import config from "../config";
import Link from "next/link";

interface CategoryCardProps {
  featureImgUrl: string;
  title: string;
  slug: string;
}

export default function CategoryCard(props: CategoryCardProps) {
  return (
    <Link href={`blogs/${props.slug}`}>
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden w-full h-[70vh] transition duration-500 cursor-pointer hover:scale-105">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src={`${config.api}${props.featureImgUrl}`}
                alt="Random image"
                width={500}
                height={500}
                className="object-cover w-full h-full transition duration-500 cursor-pointer hover:scale-105"
              />
            </div>
            <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-12 text-center pointer-events-none">
            <h2 className="text-white text-3xl font-jost">{props.title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

{
  /* <div className="relative overflow-hidden w-full h-[60vh]">
<Image
  src={test}
  alt={"alt"}
  fill
  className="object-cover w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"
/>
<div className="absolute w-full h-full bg-[linear-gradient(0deg,rgba(0,0,0,0.75)_6.82%,rgba(0,0,0,0.00)_81.44%)]"></div>
<div className="absolute">asdasd</div>
<div className=" inset-0 flex items-end justify-center">
              <h2 className="absolute text-white text-3xl font-bold">
                  Get Lost in Mouasdasdntains
              </h2>
          </div>
</div> */
}
