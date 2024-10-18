
import Image from "next/image";

const Parallex = () => {
    return (
        <div className="flex items-center flex-col lg:flex-row">
      {/* left side */}
      <div className="lg:w-1/3 p-6 py-40 lg:py-48 h-full bg-[#f7f2ee] text-center space-y-8">
        <h1 className="text-3xl font-bold">Seasonal Menus</h1>
        <hr className="w-[40%] flex text-center mx-auto border-1 border-black" />
        <p className="w-2/3 mx-auto">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident.
        </p>
        <a
          href="#_"
          class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
        >
          <span class="w-48 h-48 rounded rotate-[-40deg] bg-yellow-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span class="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Shop Now
          </span>
        </a>
      </div>
      {/* right side */}
      <div className="lg:w-1/2 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery1-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery2-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery3-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery4-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery5-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
          <div className="relative h-48 md:h-64">
            <Image
              src="/assets/gallery6-640x480.jpg" // Replace with your actual image path
              alt="Restaurant"
              width={1000}
              height={1000}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
    );
};

export default Parallex;




