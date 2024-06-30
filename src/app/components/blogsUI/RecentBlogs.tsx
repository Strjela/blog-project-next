import { Link } from "next-view-transitions";
import Card from "./Card";
import { BlogItem } from "../../types/CardTypes";
import SkeletonCards from "../skeletons/skeletonCards";
import { query } from "../../services/ApolloClient";
import { GET_RECENT_ARTICLES } from "../../services/querys";

export default async function RecentBlogs() {
  const { data, error, loading } = await query({ query: GET_RECENT_ARTICLES });

  return (
    <div className="max-w-6xl mx-auto pt-20">
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
        {loading || error ? (
          <SkeletonCards />
        ) : (
          data.articles.data.map((item: BlogItem) => (
            <Card
              key={item.id}
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
  );
}
