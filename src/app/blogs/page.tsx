import Newsletter from "../components/layout/Newsletter";
import Image from "next/image";
import allBlogsWave from "../../../public/images/allBlogsWave.svg";
import FilterBlogs from "../components/blogsUI/FilterBlogs";
import { query } from "../services/ApolloClient";
import { GET_ALL_ARTICLES } from "../services/querys";
import SkeletonCards from "../components/skeletons/skeletonCards";
import NotFound from "../not-found";

async function Blogs() {
  const { data, error, loading } = await query({ query: GET_ALL_ARTICLES });

  if (loading) return <SkeletonCards />;

  if (error) return <NotFound />;

  return (
    <>
      <div className=" bg-parallax bg-fixed  bg-no-repeat w-full bg-cover bg-center h-[100vh]">
        <Image
          src={allBlogsWave}
          alt="wave"
          className="bottom-0 left-0 w-full absolute hidden sm:block "
        />
      </div>
      <FilterBlogs articles={data.articles.data} />
      <Newsletter />
    </>
  );
}

export default Blogs;
