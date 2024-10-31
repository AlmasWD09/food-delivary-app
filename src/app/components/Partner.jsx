import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

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
            <div className="py-4">
            <Link
              href={"/partnerHero"}
              className="relative inline-flex items-center w-36 justify-center p-2 px-3 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out  bg-primary rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryLight group-hover:translate-x-0 ease">
            <FaArrowRightLong className="w-6 h-6" />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            LEARN MORE
          </span>
          <span className="relative invisible">LEARN MORE</span>
            </Link>
            </div>
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
            <div className="py-4">
            <Link
              href={"/partnerRestu"}
              className="relative inline-flex items-center w-36 justify-center p-2 px-3 py-2 overflow-hidden font-medium text-white transition duration-300 ease-out  bg-primary rounded-full shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-primaryLight group-hover:translate-x-0 ease">
            <FaArrowRightLong className="w-6 h-6" />
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
            LEARN MORE
          </span>
          <span className="relative invisible">LEARN MORE</span>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
