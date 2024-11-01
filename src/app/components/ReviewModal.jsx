"use client"
import { FaStar } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { useState } from "react";
import { useSession } from "next-auth/react";
import ReactStars from "react-rating-stars-component";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useFavourite from "@/hooks/useFavourite";

const ReviewModal = ({refetch:reload,restaurantName}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState(null);
    const axiosPub = useAxiosPublic()
    const session = useSession();
    
    const favo = {
      restaurantName: restaurantName,
      userEmail:session?.data?.user?.email,
    };

    const [data,refetch] = useFavourite(favo)
 console.log(favo)
     //  send review st
  const {mutateAsync} = useMutation({
    mutationKey: ["review"],
    mutationFn : async(review)=>{
      const {data} = await axiosPub.post('/reviews',review)
      console.log(data)
      return data
    },
    onSuccess : () => {
      toast.success("Thank you. For your valuable review")
      setIsModalOpen(false); 
      reload()
    }
  })
  // end

  const {mutateAsync:favorite} = useMutation({
    mutationKey: ["favorite"],
    mutationFn : async(fav)=>{
      const {data} = await axiosPub.post('/favorite',fav)
     
      return data
    },
    onSuccess : () => {
      toast.success("You have successfully added on your favorite list.")
      setIsModalOpen(false); 
    
    }
  })
  // end

    const handleModal = () => {
        setIsModalOpen(true);
    };

    const handleReview = (e) => {
        e.preventDefault(); 
        const form = e.target;
        const message = form.review.value;
        const review= {
            rating : rating,
            review : message,
            userName : `${session?.data?.user?.firstName} ${session?.data?.user?.lastName}`,
            restaurantName : restaurantName
        }
       
       mutateAsync(review)
       
    };

    const handleFavourite = () => {
        const favourite = {
            restaurantName : restaurantName,
            userEmail : session?.data?.user?.email,
            userName : session?.data?.user?.name
        }
    
        favorite(favourite)
    }
  
    
   
     
      
  
    return (
        <div className="flex gap-4 absolute right-6 md:right-8 lg:right-10 top-6 md:top-8 lg:top-10">
            <div onClick={handleFavourite} className={`rounded-full cursor-pointer p-3 ${data?.length > 0 && "bg-pink-600 text-white"}  bg-[#FFFFFF] md:w-11`}>
                <FiHeart className={`md:text-xl `} />
            </div>
            <div onClick={handleModal} className="rounded-full p-3 bg-[#FFFFFF] md:w-11 cursor-pointer">
                <FaStar className="md:text-xl" />
            </div>
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed px-5 lg:px-0 z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white md:w-[600px] relative rounded-lg p-6 max-w-sm mx-auto">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-0 right-0 rounded-full shadow-lg p-3 bg-[#FFFFFF] md:w-11">X</button>
                        <h2 className="text-lg font-semibold">Hey {session?.data?.user?.name}</h2>
                        <p className="text-sm">Please give your valuable feedback</p>
                        <div>
                            <form onSubmit={handleReview}> 
                                <div className="mt-5">
                                    <div className="flex justify-center">
                                        <ReactStars
                                            count={5}
                                            onChange={setRating}
                                            size={30}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <textarea
                                        id="review"
                                        name="review"
                                        rows="4"
                                        className="border w-full mt-2 rounded-xl p-3"
                                        placeholder="Type your review here..."
                                    />
                                </div>
                                <input type="submit" className="bg-primaryLight cursor-pointer rounded-lg text-white px-3 py-1" value="Send" />
                            </form>
                        </div>
                    </div>
                </div>
            )}
            {/* end */}
        </div>
    );
};

export default ReviewModal;
