import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";

import RecentBlogs from "./components/RecentBlogs";
import IntroLandingPage from "./components/IntroLandingPage";
import FeaturedBlogs from "./components/FeaturePosts";
import CategoryLandingPage from "./components/CategoryLandingPage";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroLandingPage />
      <FeaturedBlogs />
      <CategoryLandingPage />
      <RecentBlogs />
      <Newsletter />
    </>
  );
}
