/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import AboutImg from "../../../public/images/aboutMeImg.jpg";
import AboutWave from "../../../public/images/aboutWave.svg";
import Newsletter from "../components/layout/Newsletter";

const About = () => {
  return (
    <>
      <div className="overflow-hidden relative h-[100vh]">
        <Image
          src={AboutImg}
          alt="test"
          priority
          className=" h-[100vh] absolute w-full object-cover "
        />
        <Image
          src={AboutWave}
          alt="wave"
          priority
          className="bottom-0 left-0 w-full absolute"
        />
      </div>

      <div className="max-w-5xl mx-auto  lg:px-8  px-6 mt-24">
        <h2 className="sedgwick text-5xl my-6 lg:text-5xl text-left pb-6 ">
          About me
        </h2>
        <p className="text-xl lg:text-2xl font-jost leading-relaxed tracking-wide ">
          Welcome to Sky Adventures! My name is Nikola Prikola, and I'm thrilled
          to share my passion for aviation and sky adventures with you. <br />
          <br />
          Sky Adventures is more than just a blog it's a platform where I can
          share my knowledge, experiences, and adventures with fellow aviation
          enthusiasts like you. Whether you're a seasoned pilot, an aspiring
          aviator, or simply someone who loves the thrill of adventure, there's
          something here for everyone. <br />
          <br />
          But Sky Adventures is not just about me – it's about building a
          community of like-minded individuals who share a passion for aviation
          and adventure. I encourage you to join the conversation, share your
          own stories and experiences, and connect with fellow aviation
          enthusiasts from around the world. <br /> <br />
          So whether you're here to learn, to explore, or simply to be inspired,
          I invite you to come along on this incredible journey with me.
          Together, let's soar to new heights and experience the wonder of the
          skies like never before. <br /> <br />
          Thank you for being a part of the Sky Adventures community. <br />
          <br />
          Blue skies and happy landings! <br /> <br />
        </p>
        <p className="font-bold text-2xl font-jost leading-relaxed tracking-wide pb-32">
          Nikola Prikola :)
        </p>
      </div>
      <Newsletter />
    </>
  );
};

export default About;
