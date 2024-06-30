import CategoryCard from "./CategoryCard";
import { CategoryBlogItem } from "../../types/CategoryPostTypes";
import Spinner from "../skeletons/spinnerLoading";
import { query } from "@/app/services/ApolloClient";
import { GET_CATEGORY_ARTICLES } from "@/app/services/querys";

export default async function CategoryLandingPage() {
  const { data, loading } = await query({
    query: GET_CATEGORY_ARTICLES,
  });
  return (
    <>
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
        {loading ? (
          <Spinner />
        ) : (
          data.articles.data.map((item: CategoryBlogItem) => (
            <CategoryCard
              key={item.id}
              title={item.attributes.title}
              slug={item.attributes.slug}
              featureImgUrl={item.attributes.FeatureImg.data.attributes.url}
            />
          ))
        )}
      </div>
    </>
  );
}
