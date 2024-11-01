import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Partner = () => {
  return (
    <div className="container px-3 lg:px-0  mx-auto ">
      <h3 className="lg:text-4xl text-center font-bold">
        Want to join partnership?
      </h3>
      <div className="mt-24 flex flex-col md:flex-row items-center  md:justify-around gap-10">
        <div className="relative ">
          <Image
            className="rounded-lg object-cover bg-center md:w-[300px] md:h-[200px] w-full lg:h-[400px] h-[200px] lg:w-[600px]"
            width={600}
            height={400}
            src={"https://quickeat-react.vercel.app/assets/img/photo-6.jpg"}
            alt="delivery man"
          />
          <div className="lg:w-[600px] md:w-[300px] md:h-[200px]  w-[270px] h-[200px] flex flex-col justify-end p-8 lg:-top-10 md:-top-8 md:-right-8 -top-6  lg:-right-10 absolute lg:h-[400px] border-primaryLight border-4 lg:border-8 rounded-lg">
            <h3 className="lg:text-3xl md:text-2xl text-xl text-white  font-semibold">
              Became a Hero
            </h3>
            <Link
              href={"/partnerHero"}
              className="bg-primaryLight mt-4 justify-center w-40 flex items-center p-2 gap-2 rounded-lg lg:p-3 text-white"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>

        <div className="relative">
          <Image
            className="rounded-lg object-cover bg-center md:w-[300px] md:h-[200px] w-full lg:h-[400px] h-[200px] lg:w-[600px]"
            width={600}
            height={400}
            src={
              "https://i.ibb.co.com/B3nNy60/istockphoto-1142206960-612x6122222.jpg"
            }
            alt="delivery man"
          />
          <div className="lg:w-[600px] md:w-[300px] md:h-[200px]  w-[270px] h-[200px] flex flex-col justify-end p-8 lg:-top-10 md:-top-8 md:-right-8 -top-6  lg:-right-10 absolute lg:h-[400px] border-primaryLight border-4 lg:border-8 rounded-lg">
            <h3 className="lg:text-3xl md:text-2xl text-xl text-white  font-semibold">
              Became a Partner
            </h3>
            <Link
              href={"/partnerRestu"}
              className="bg-primaryLight mt-4 justify-center w-40 flex items-center p-2 gap-2 rounded-lg lg:p-3 text-white"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
