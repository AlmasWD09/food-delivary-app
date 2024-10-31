"use client"
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";


const AddMenuModal = ({refetch,setIsModalOpen}) => {
    const axiosPub = useAxiosPublic()

    const {mutateAsync} = useMutation({
      mutationKey: ["newMenu"],
      mutationFn: async(menu)=>{
        const {data} = await axiosPub.post("/menus/add-menu",menu)
         return data
      },
      onSuccess : ()=>{
        toast.success("You have successfully added this menu item.");
        refetch()
        setIsModalOpen(false)
      }
    })
    
    const handleMenuAdd = async(e) => {
      e.preventDefault()
      const form = e.target
      const title = form.title.value
      const price = form.price.value
      const description = form.description.value
      const MRP = form.mrp.value
      const fileInput = form.fileInput.files[0];

     const formData = new FormData();
     formData.append("image", fileInput);

     try{
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_KEY}`,
        formData
      );

      const menu = {
        title,
        price,
        MRP,
        description,
        image : data?.data?.url
      }
     
      mutateAsync(menu)
     }catch(error){
      console.log(error.message)
     }
    }
    return (
        <>
        {/* modal background  */}
        <div
          onClick={()=>setIsModalOpen(false)}
          className=" bg-slate-100 backdrop-blur-sm inset-0 bg-opacity-10 fixed "
        ></div>
        {/* modal show  */}
        <div className=" fixed  top-1/2 left-[60%] transform  -translate-x-1/2 -translate-y-1/2  ">
          <div className="bg-white  overflow-y-auto px-10 py-6 rounded-xl   w-[500px]  max-h-[700px] border-4 border-primary shadow-md  ">
            <form onSubmit={handleMenuAdd}>
              <h2 className="text-center text-xl font-semibold">
                Add a new menu item
              </h2>
              <div className="grid  gap-5 py-4 ">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                  
                    placeholder="Type title"
                    className="block outline-primaryLight  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 "
                  />
                </div>
              
                <div>
                  <label
                    htmlFor="mrp"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    MRP
                  </label>
                  <input
                    type="number"
                    id="mrp"
                    name="mrp"
                   
                    placeholder="Type mrp"
                    className="block outline-primaryLight  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 "
                  />
                </div>
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm text-gray-500 dark:text-gray-300"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                   
                    placeholder="Type price"
                    className="block outline-primaryLight  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 "
                  />
                </div>

                <div className="mt-5 flex flex-col">
                <label className="block text-sm font-medium text-gray-700">
                  Upload a file:
                </label>
                <input
                  type="file"
                  className="border outline-primaryLight mt-2 w-full rounded-xl p-3"
                  id="fileInput"
                  name="fileInput"
                  accept=".jpg, .jpeg, .png, .pdf"
                />
              </div>
              
                <div className="mt-5">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="border outline-primaryLight w-full mt-2 rounded-xl p-3"
                  placeholder="Type description here..."
                />
              </div>
                
              </div>
              <button
                type="submit"
                className="py-2.5 w-full bg-primary hover:bg-green-600 text-white rounded-lg"
              >
                Add
              </button>
              
            </form>
          </div>
        </div>
      </>
    );
};

export default AddMenuModal;