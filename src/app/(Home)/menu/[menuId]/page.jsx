"use client";
import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa";
import img from "../../../../../public/chickenFry.jpg";
import { IoCartOutline } from "react-icons/io5";
import RecommendMenu from "@/components/RecommendMenu";
import { useState } from "react";
import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import ReactStars from "react-rating-stars-component";

const MenuDetails = ({ params }) => {
  const axiosPub = useAxiosPublic();
  const [click, setClick] = useState("overview");
  const [quantity, setQuantity] = useState(1);
  const queryClient = useQueryClient();
  const session = useSession();
  const [rating,setRating] = useState()

  const { data, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const { data } = await axiosPub.get(`/menus`);
      return data;
    },
  });

  //  add to cart st
  const { mutateAsync } = useMutation({
    mutationKey: ["cart"],
    mutationFn: async (item) => {
      const { data } = await axiosPub.post("/single-menu", item);

      return data;
    },
    onSuccess: () => {
      toast.success("You have successfully added to cart");
      queryClient.invalidateQueries("cart");
    },
  });
  // end


    //  send review st
    const {mutateAsync:menuRev,reset} = useMutation({
      mutationKey: ["menuReview"],
      mutationFn : async(review)=>{
        const {data} = await axiosPub.post('/reviews/menuRev',review)
        return data
      },
      onSuccess : () => {
        toast.success("Thank you. For your valuable review")
       reset()
       setRating(0)
       document.getElementById('reviewForm').reset();
      }
    })
    // end


  const singleData = data?.find((food) => food._id === params.menuId);

  
    // review get
    const {data:itemReviews,refetch} = useQuery({
      queryKey: ["menuItemsReview"],
      queryFn: async()=>{
        const{data} = await axiosPub.get(`/reviews/menuRev?title=${singleData?.title}`)
        return data
      }
    })
  
    refetch()
 

  const handleQuantity = (qua) => {
    if (qua === "plus") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  const handleCart = async (data) => {
    const { _id, ...rest } = data;
    const item = {
      ...rest,
      menuId: _id,
      quantity: quantity,
      userEmail: session?.data?.user?.email,
    };

    try {
      mutateAsync(item);
    } catch (error) {
      alert(error.message);
    }
  };

 
  const handleReview = e => {
    e.preventDefault()
    const review = {
      userName : session?.data?.user?.name,
      userEmail : session?.data?.user?.email,
      revDate : new Date,
      rating : rating,
      comment : e.target.review.value,
      title: singleData?.title
    }
    menuRev(review)
  }

  
  

  return (
    <div>
      <div
        style={{
          backgroundImage:
            "url(https://i.ibb.co.com/RBvX2Kf/Black-White-Simple-Food-Review-Youtube-Channel-Art.png)",
        }}
        className="relative  w-full bg-fixed h-[500px] bg-no-repeat bg-bottom bg-cover"
      >
        <div className="absolute top-1/2 left-1/2 px-3 lg:px-0 transform -translate-x-1/2 -translate-y-1/2">
          <h3 className="lg:text-6xl text-4xl text-white font-bold">
            {singleData?.title}
          </h3>
          <div className="bg-primary mx-auto lg:w-[313px]  text-center mt-8 p-4">
            <h3 className="md:text-xl text-white flex justify-center items-center gap-4">
              Home <FaArrowRight /> Menu <FaArrowRight /> Details
            </h3>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1240px] mt-10  md:mt-14  px-3 lg:px-0  mx-auto">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 my-16 lg:my-20">
          <div className="lg:col-span-1">
            <Image
              width={400}
              height={400}
              src={singleData?.image}
              className="lg:max-h-[400px] w-full"
              alt="image"
            />
          </div>
          <div className="lg:col-span-1">
            <h3 className="text-4xl font-bold">{singleData?.title}</h3>
            <p className="my-3 border-b pb-8">{singleData?.description}</p>

            <div className="md:w-1/2 w-3/5   rounded-tr-xl py-4   bg-white flex items-center gap-8">
              <p className="flex items-center font-medium">
                <FaStar className="text-orange-400" /> {"4.8(5.4k)"}
              </p>
              <div className="flex gap-1 items-center">
                <p className="line-through">$35</p>
                <p className="font-bold text-xl">${singleData?.price}</p>
              </div>
            </div>
            <p>
              Category:{" "}
              <span className="font-semibold text-xl">
                {singleData?.category}
              </span>
            </p>
            <p>
              Total orders:{" "}
              <span className="font-semibold text-xl">
                {singleData?.totalOrder}
              </span>
            </p>
            <div className="flex mt-3 gap-4 items-center">
              <div className="flex items-center  gap-3">
                <button
                  onClick={() => handleQuantity("minus")}
                  className="font-semibold rounded-full text-white px-2 py-1 bg-primaryLight"
                >
                  -
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => handleQuantity("plus")}
                  className="font-semibold rounded-full text-white px-2 py-1 bg-primaryLight"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => handleCart(singleData)}
                className="flex  justify-center w-1/2 items-center text-medium gap-2 border rounded-full hover:text-white p-3 transition-all duration-700 hover:bg-primaryLight"
              >
                <IoCartOutline /> Add to cart
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-4xl font-bold ">About this items</h3>
        <div className="md:grid my-10 grid-cols-8 gap-10">
          <div className="flex md:mb-0 mb-10 flex-col lg:col-span-1 md:col-span-2 gap-5">
            <button
              onClick={() => setClick("overview")}
              className={`p-3 ${
                click === "overview"
                  ? "bg-primaryLight transition-all duration-700 text-white"
                  : "bg-base-200 border"
              }  `}
            >
              Overview
            </button>
            <button
              onClick={() => setClick("reviews")}
              className={`p-3 ${
                click === "reviews"
                  ? "bg-primaryLight transition-all duration-700 text-white"
                  : "bg-base-200 border"
              }  `}
            >
              Reviews
            </button>
          </div>
          <div className="lg:col-span-7 md:col-span-6">
            {click === "overview" ? (
              <>
                <p>{singleData?.description}</p>
              </>
            ) : (
              <div>
                <div>
                  {
                    itemReviews?.length === 0 ? 
                    <div className="flex p-6 lg:w-4/5 border mb-5  rounded-lg   items-center justify-center">
                      <h3 className="text-xl font-medium text-center">This item have not<br/> any ratings!</h3>
                    </div>
                    :
                   itemReviews?.map(review => <>
                     <div className="lg:w-4/5 border mb-5  rounded-lg flex flex-col lg:flex-row items-center gap-4 p-6  bg-base-300">
                  <div>
                    <Image
                      width={128}
                      height={120}
                      className="md:w-32 rounded-xl"
                      src="https://i.ibb.co.com/y0JYWDk/web-development-react-javascript-website-coding.jpg"
                      alt="image"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg">
                      {review?.userName}
                      <span className="text-sm border p-1 ml-2">
                      {new Date(review?.revDate).toLocaleString()}
                      </span>
                    </h3>
                    <div className="flex gap-1 my-2 text-orange-400">
                    {Array(review?.rating)
                      .fill()
                      .map((_, i) => (
                        <span key={i}>
                          <FaStar />
                        </span>
                      ))}
                    </div>
                    <p className="mt-5">
                     {review?.comment}
                    </p>
                  </div>
                 </div>
                   </>)
                  }
                </div>
               
                <div className="lg:w-4/5 lg:max-h[180px] mt-4 border rounded-lg flex flex-col lg:flex-row items-center gap-4 p-6 bg-base-300">
                <div>
                            <form id="reviewForm" onSubmit={handleReview}> 
                                <div className="mt-5">
                                    <div>
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
                                        rows="3"
                                        cols="80"
                                        className="bg-slate-200 w-full mt-2 rounded-xl p-3"
                                        placeholder="Type your comment here..."
                                    />
                                </div>
                                <input type="submit" className="border hover:bg-primary transition-all duration-700 cursor-pointer rounded-lg hover:text-white px-3 py-1" value="Add a comment" />
                            </form>
                        </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="mb-10 mt-16">
          <h3 className="text-3xl mb-10 font-semibold">Related Item</h3>
          <RecommendMenu isLoading={isLoading} foods={data} />
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
