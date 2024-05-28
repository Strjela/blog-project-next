import Image from "next/image";
import contactImg from "../../../public/images/contactImage.jpg";
import contactWave from "../../../public/images/contactWave.svg";

import Newsletter from "../components/layout/Newsletter";

export default function Contact() {
  return (
    <>
      <div className="overflow-hidden relative h-[100vh]">
        <Image
          src={contactImg}
          alt="test"
          priority
          className=" h-[100vh] absolute w-full object-cover "
        />
        <Image
          src={contactWave}
          alt="wave"
          className="bottom-0 left-0 w-full absolute"
        />
      </div>
      <div className="max-w-5xl  mx-auto  lg:px-8 px-6 pb-32 mt-24">
        <h2 className="sedgwick text-4xl lg:text-5xl  text-left pb-6 ">
          Contact me
        </h2>
        <p className="text-xl lg:text-2xl font-jost leading-relaxed tracking-wide mb-7">
          Why hello there. How nice of you to stop by! Thanks so much for
          spending some of your time hanging out with us in this virtual world.
          You are awesome! <br />
          <br /> If you would like to get in contact with us about anything,
          please feel free to drop us an email. We love hearing from our readers
          and will do our best to respond to every message we receive as
          promptly as possible. <br />
          <br /> Please keep in mind that we often travel to remote and
          developing destinations, and may go a few days or more without
          internet. We also get dozens of emails every single day, and it can
          take us a while to work our way through them. <br /> <br /> Please be
          patient if you don’t hear back the same day, and if you don’t get a
          reply after a week please send us a follow-up email. Chances are we
          may have missed your first one. <br />
          <br />
        </p>
        <div className="text-center font-jost text-2xl lg:text-3xl font-bold  text-slate-500">
          Nikola.prikola@gmail.com
        </div>
      </div>
      <Newsletter />
    </>
  );
}
