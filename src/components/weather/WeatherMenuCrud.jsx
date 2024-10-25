import Image from "next/image";
import { useRouter } from "next/navigation";


const WeatherMenuCrud = ({ item }) => {
  const {_id, photo, name, weatherName, price, description } = item || {};
const router = useRouter();
  const handleClick = (id) =>{
    router.push(`/weatherMenu/${id}`);

  }
  return (
    <div className="relative rounded-2xl overflow-hidden group ">
    <div className="">
      <Image width={400} height={500} src={photo} className="lg:max-h-[400px] w-full " alt="image" />
    </div>

    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
      <p className="text-lg font-semibold">{weatherName}</p>
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-md">${price}</p>
      <p
        onClick={() => handleClick(_id)}
        className="font-bold text-primary cursor-pointer">See More</p>
    </div>
  </div>
  );
};

export default WeatherMenuCrud;
