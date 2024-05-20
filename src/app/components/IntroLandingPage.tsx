import Image from "next/image";
import banner from "../../../public/images/banner-logos.jpg.webp";
import welcomeImg from "../../../public/images/pexels-chiecharon-705075.jpg";
import backgroundWaveGray from "../../../public/images/landingWave.svg";
import { IoIosNavigate } from "react-icons/io";

export default function IntroLandingPage() {
  return (
    <>
      <div className="flex justify-center mt-5">
        <Image src={banner} alt="banner" priority />
      </div>
      <div className="mt-14 px-4 flex justify-center relative ">
        <div className=" flex justify-center flex-wrap text-center max-w-screen-lg">
          <div>
            <h4 className="font-jost text-4xl  tracking-wider">
              Welcome to SkyAdventure
            </h4>
            <p className="font-jost text-xl xl:text-2xl text-center text-slate-600 my-7 xl:mb-24 tracking-wider leading-10">
              SkyAdventure is a comprehensive platform dedicated to empowering
              travelers with the knowledge and inspiration to embark on
              unforgettable journeys, offering a diverse array of travel guides,
              destination recommendations, and insider insights.
            </p>
          </div>
          <Image
            src={welcomeImg}
            alt="about image"
            className="rounded-2xl z-20 "
          />
        </div>
        <Image
          src={backgroundWaveGray}
          alt="landingWave"
          className="w-max absolute left-0 bottom-0 "
        />
      </div>

      <div className="bg-[#f7f7f7] pt-28 pb-16">
        <div className=" px-4 mx-auto max-w-5xl flex bg-[#f7f7f7] items-center  text-gray-800 before:flex-1 before:border-t before:border-gray-300 before:me-2 after:flex-1 after:border-t after:border-gray-300 after:ms-2">
          <IoIosNavigate size={50} />
        </div>
      </div>
    </>
  );
}
