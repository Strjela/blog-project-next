import Hero from "./components/landingPage/Hero";
import Newsletter from "./components/layout/Newsletter";
import RecentBlogs from "./components/blogsUI/RecentBlogs";
import IntroLandingPage from "./components/landingPage/IntroLandingPage";
import FeaturedBlogs from "./components/blogsUI/FeatureBlogs";
import CategoryLandingPage from "./components/landingPage/CategoryLandingPage";
import CookieConsent from "react-cookie-consent";
import CookieConsentBanner from "./components/utils/CookiesBanner";

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
