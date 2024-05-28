import { Link } from "next-view-transitions";

export default function Hero() {
  return (
    <section className=" h-[100vh] relative w-auto overflow-hidden flex justify-center items-end ">
      <div className="bg-fixed  w-[1240px]  px-4 sm:px-8  ">
        <div className="relative  z-30 pb-44 flex flex-col gap-6 ">
          <h2 className="font-jost text-2xl sm:text-3xl lg:text-3xl font-bold text-slate-100">
            The ultimate ride of your life!
          </h2>
          <Link href="/blogs">
            <button className=" inline-block w-7/12 sm:w-3/12 rounded bg-red-500 px-6 pb-2 pt-2.5 text-lg font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-red-800 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
              Explore with us
            </button>
          </Link>
        </div>
      </div>

      <video
        autoPlay
        muted
        loop
        id="myVideo"
        className="absolute  z-10 w-auto min-w-full min-h-[100vh] max-w-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <source src="/video/pozadinaVideo.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black from-2%" />
    </section>
  );
}
