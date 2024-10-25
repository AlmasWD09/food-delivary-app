"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import toast from "react-hot-toast";

const SpecificMenus = ({restaurantMenus}) => {
    const categories = [...new Set(restaurantMenus.map(item => item.category))];
    const [filteredCategory, setFilteredCategory] = useState(categories[0]);
    const queryClient = useQueryClient();
    const axiosPub = useAxiosPublic()


  const filteredMenu = restaurantMenus.filter(item => item.category === filteredCategory);

  // add to cart
  const {mutateAsync} = useMutation({
    mutationKey: ["cart"],
    mutationFn : async(item)=>{
      const {data} = await axiosPub.post("/single-menu",item)
      console.log(data)
      return data
    },
    onSuccess : () => {
      toast.success("You have successfully added to cart")
      queryClient.invalidateQueries("cart");
    }
  })

  const handleCart = async(data) => {
    const { _id, ...rest } = data;
     const item = {
      ...rest,
      menuId : _id,
      quantity : 1,
      userEmail : "tariquelislam2015@gmail.com"
     }
    
     try{
      mutateAsync(item)
      
     }
     catch(error){
       toast.error(error.message)
     }
   }

    return (
        <div>
      {/* Category Buttons */}
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button 
            key={index} 
            onClick={() => setFilteredCategory(category)}
            className={`${filteredCategory === category ? 'bg-primary text-white' : 'bg-primaryGray'}  px-3 py-2 rounded-lg`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Display Filtered Menu */}
      <div className="menu-items my-8 grid md:grid-cols-2 grid-cols-1 gap-10 ">
        {
          filteredMenu?.length === 0 ?
           <>
           <h3 className="text-2xl font-semibold text-center">This restaurant have not<br/> added any item</h3>
           </> 
           :
          filteredMenu.map((item, index) => (
            <div key={index} className="flex relative flex-col lg:flex-row border rounded-lg p-8 gap-5">
              <div className="overflow-hidden min-w-[200px]">
              <Image width={200} height={100} className="object-cover transition-all duration-700 hover:scale-110 w-full lg:w-[200px] h-[150px] rounded-lg bg-center" src={item.image} alt={item.name} />
              </div>
              <div>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
              <p>Price: <span className="text-xl font-semibold">${item.price}</span></p>
              <button onClick={()=>handleCart(item)} className="border-2 hover:bg-primaryLight shadow-lg transition-all duration-700 hover:scale-110 z-30 bg-white hover:text-white text-xl font-medium rounded-full px-3 py-2 absolute top-2 right-2">+</button>
              </div>
            </div>
          ))
        }
      </div>
          </div>
    );
};

export default SpecificMenus;