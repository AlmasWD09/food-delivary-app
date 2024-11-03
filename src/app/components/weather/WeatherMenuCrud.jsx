import Image from "next/image";
import { useRouter } from "next/navigation";

const WeatherMenuCrud = ({ item }) => {
  const { _id, photo, name, weatherName, price } = item || {};
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/weatherMenu/${id}`);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden group max-w-[300px] w-full mx-auto">
      {/* Image Wrapper with Overlay */}
      <div className="relative flex justify-center items-center max-h-[200px] max-w-[300px] w-full h-full rounded-2xl">
        <Image
          width={300}
          height={200}
          src={photo}
          className="rounded-2xl w-full h-full"
          alt="image"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white transition-opacity rounded-2xl">
          <p className="text-lg font-semibold">{weatherName}</p>
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-md">${price}</p>
          <p
            onClick={() => handleClick(_id)}
            className="font-bold text-primary cursor-pointer"
          >
            See More
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherMenuCrud;
