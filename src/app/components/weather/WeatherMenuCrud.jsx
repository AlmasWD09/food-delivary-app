import Image from "next/image";
import { useRouter } from "next/navigation";

const WeatherMenuCrud = ({ item }) => {
  const { _id, photo, name, weatherName, price, description } = item || {};
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/weatherMenu/${id}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden group md:max-h-[180px] md:max-w-[300px] w-full mx-auto">
      <div className="flex justify-center items-center md:max-h-[200px] md:max-w-[400px] rounded-2xl">
        <Image
          width={300}
          height={100}
          src={photo}
          className="rounded-2xl"
          alt="image"
        />
      </div>

      <div className="absolute rounded-2xl max-w-[300px] inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition-opacity duration-300">
        <p className="text-lg font-semibold">{weatherName}</p>
        <p className="text-lg font-semibold">{name}</p>
        <p className="text-md">${price}</p>
        <p onClick={() => handleClick(_id)} className="font-bold text-primary cursor-pointer">
          See More
        </p>
      </div>
    </div>
  );
};

export default WeatherMenuCrud;
