import heroImg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <div className=" flex md:flex-row flex-col items-center gap-8 md:justify-between w-full mt-16">
      <div className="md:w-1/2 w-full flex flex-col gap-8 md:gap-4 items-start text-start">
        <div className="w-full text-5xl lg:text-6xl leading-tight font-bold">
          <p>
            Unleash your Coding Potential with{" "}
            <span className=" text-accent text-4xl lg:text-6xl">ProDeveloperClub.</span>
          </p>
        </div>
        <div className="md:hidden block">
          <img src={heroImg} alt="A tech image" />
        </div>
        <div className="w-full text-base">
          <p>
            We're more than just a platform. We're your gateway to endless
            coding challenges, vibrant community engagement, and unparalleled
            growth opportunities.
          </p>
        </div>
        <div className="w-full flex flex-col lg:flex-row gap-4 mt-4  md:gap-10 font-semibold">
          <button
            type="button"
            className=" bg-grey-100 py-4 px-8 rounded-xl text-black"
          >
            Get Started
          </button>
          <button
            type="button"
            className="py-4 px-8 rounded-xl text-grey-100 border border-grey-100"
          >
            Learn More
          </button>
        </div>
      </div>
      <div className="md:block hidden">
        <img src={heroImg} alt="A tech image" />
      </div>
    </div>
  );
}
