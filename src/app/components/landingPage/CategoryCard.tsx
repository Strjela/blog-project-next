import Image from "next/image";
import config from "../../config";
import Link from "next/link";
import { CategoryCardProps } from "../../types/CategoryPostTypes";

export default function CategoryCard({
  slug,
  featureImgUrl,
  title,
}: CategoryCardProps) {
  return (
    <Link href={`blogs/${slug}`}>
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden w-full h-[70vh] transition duration-500 cursor-pointer hover:scale-105">
          <div className="absolute inset-0">
            <div className="absolute inset-0">
              <Image
                src={`${config.api}${featureImgUrl}`}
                alt="Random image"
                width={500}
                height={500}
                className="object-cover w-full h-full transition duration-500 cursor-pointer hover:scale-105"
              />
            </div>
            <div className=" absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-12 text-center pointer-events-none">
            <h2 className="text-white text-3xl font-jost">{title}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}
