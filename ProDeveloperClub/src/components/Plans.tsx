export default function Plans() {
  return (
    <div className=" flex flex-col items-center justify-center w-full">
      <div className=" flex flex-col gap-4 items-center justify-center w-full mt-20 md:mt-32">
        <div className="w-full text-6xl leading-tight font-bold text-start md:text-center">
          <p className=" text-accent text-sm">Start you coding journey</p>
        </div>
        <div className="w-full md:w-1/2 text-4xl font-bold">
          <p>Choose your plan and get instant access</p>
        </div>
      </div>

      <div>
        <div className="cards flex flex-col lg:flex-row items-center justify-center mt-16 gap-4 w-full">
          <div className="card text-center h-auto">
            <h3 className=" text-xl font-semibold">Flex</h3>
            <div className=" flex flex-col gap-1">
              <h2 className=" text-3xl font-bold">N5,000</h2>
              <p className=" text-sm text-grey-300">per month</p>
            </div>
            <div className="card-body ">
              <ul className="flex flex-col gap-3 items-start text-start w-full list-disc mt-12">
                <li>Access to all Coding Challenges</li>
                <li>Weekly access to Webinars</li>
                <li>Exclusive access to Discord Channel</li>
                <li>Pro Badge with premium color</li>
              </ul>
              <button className=" mt-20 border border-grey-100 font-semibold py-4 px-8  rounded-xl">
                Choose monthly plan
              </button>
            </div>
          </div>
          <div className="card mid-card text-center  bg-red-200 text-black h-auto">
            <h3 className=" text-xl font-semibold">Pro</h3>
            <div className=" flex flex-col justify-center items-center text-center">
              <h2 className=" text-3xl font-bold">N10,000</h2>
              <p className=" text-sm">per quarter</p>
              <p className="bg-black py-0.5 text-xs w-20 mt-2 rounded-full text-white ">
                25% OFF
              </p>
            </div>
            <div className="card-body">
              <ul className="flex flex-col gap-3 items-start w-full list-disc mt-12">
                <li>Access to all Coding Challenges</li>
                <li>Weekly access to Webinars</li>
                <li>Exclusive access to Discord Channel</li>
                <li>Pro Badge with premium color</li>
              </ul>
              <button className=" mt-20 bg-black text-white font-semibold border-grey-100 py-4 px-8  rounded-xl">
                Choose monthly plan
              </button>
            </div>
          </div>
          <div className="card text-center h-auto">
            <h3 className=" text-xl font-semibold">Ultimate</h3>
            <div className=" flex flex-col justify-center items-center text-center">
              <h2 className=" text-3xl font-bold">N50,000</h2>
              <p className=" text-sm text-grey-300">per year</p>
              <p className=" text-xs mt-2">25% OFF</p>
            </div>
            <div className="card-body">
              <ul className="flex flex-col gap-3 items-start text-start w-full list-disc mt-12">
                <li>Access to all Coding Challenges</li>
                <li>Weekly access to Webinars</li>
                <li>Exclusive access to Discord Channel</li>
                <li>Pro Badge with premium color</li>
              </ul>
              <button className=" mt-20 border border-grey-100 font-semibold py-4 px-8  rounded-xl">
                Choose monthly plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
