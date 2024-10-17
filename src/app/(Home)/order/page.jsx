"use client";
import OrderCartCard from "@/components/cards/OrderCartCard";
import CheckoutForm from "@/components/CheckoutForm";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";


const OrderPage = () => {
 
  const [page, setPage] = useState("backPack");
  const [ship, setShip] = useState("no");
  const axiosPub = useAxiosPublic()
  const [trip,setTrip] = useState(0)
  const session = useSession()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

  const {data: cartData = [],refetch,isLoading} = useQuery({
    queryKey: ['cartData',], 
    queryFn: async() =>{
        const res = await axiosPub.get(`/cart-menu/${session?.data?.user?.email}`);
        return res.data;
    }
})

  if (isLoading) {
    return <li>Loading...</li>;
  }

  const handleCheckboxChange = (event) => {
    setShip(event.target.checked ? "yes" : "no");
  };

  const handleChange = (e) => {
    setTrip(parseInt(e.target.value) || 0);
   
  }
  
 
  const totalPrice = cartData?.reduce((total, item) => {
    return total + (parseInt(item.price)* parseInt(item.quantity));
  }, 0);
  const totalMRP = cartData?.reduce((total, item) => {
    return total + (parseInt(item.MRP)* parseInt(item.quantity));
  }, 0);
  
  const discountMRP = totalMRP - totalPrice
  const totalAmount = totalPrice + 10 + parseInt(trip) 

  const paymentData = {
    totalAmount,
    userName : session?.data?.user?.name,
    userEmail: session?.data?.user?.email,
    userAddress : "Dhaka, Bangladesh",
    userNumber : "01568606366",
    titles : cartData?.map(item => item?.title) || [],
    itemsId : cartData?.map(item => item?._id) || []
  }

  // const handleAddress = (e) => {
  //   e.preventDefault();
  //   const form = e.target
  //   const name = form.name.value
  //   const number = form.number.value
  //   const address = form.address.value
  //   const email = form.email.value
  //   const message = form.message.value
  //   const userInfo = {
  //     name,
  //     number,
  //     address,
  //     email,
  //     message
  //   }
  //   localStorage.setItem("userOrder",userInfo)
   
  // }

  // useEffect(() => {
  //   let discountedAmount = totalAmount;

  //   if (totalAmount >= 50) {
  //     const discount = Math.ceil(totalAmount / 10);
  //     discountedAmount = totalAmount - discount;
  //   } else if (totalAmount >= 100) {
  //     const discount = Math.ceil(totalAmount / 16);
  //     discountedAmount = totalAmount - discount;
  //   } else if (totalAmount >= 150) {
  //     const discount = Math.ceil(totalAmount / 20);
  //     discountedAmount = totalAmount - discount;
  //   } else if (totalAmount >= 190) {
  //     const discount = Math.ceil(totalAmount / 25);
  //     discountedAmount = totalAmount - discount;
  //   }

  //   setTotal(discountedAmount);
  // }, [totalAmount]);

  // console.log(total);
  return (
    <div className="px-3">
      <div className="lg:max-w-[1240px] py-20 mx-auto">
        <div className="flex justify-center mb-10 items-center gap-3">
          <button
            onClick={() => setPage("backPack")}
            className={`${(page === "backPack" || page === "address") ? "text-primaryLight" : ""} `}
          >
           Cart
          </button>
          <hr className={`${page === "address" ? "border-primaryLight" : ""} w-20 border`} />

          <button
            onClick={() => setPage("address")}
            className={`${page === "address" && "text-primaryLight"}`}
          >
            Address
          </button>
          <hr className="w-20 " />
          <p>Confirmation</p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-10">
          <div className="lg:col-span-3 md:col-span-1 ">
            {page === "backPack" ? (
              <>
                {/* all cart items container start*/}
                <div className="grid grid-cols-1 gap-5">
                  {
                    cartData.length > 0 ?
                    cartData.map((item) => <OrderCartCard totalPrice={totalPrice} refetch={refetch} key={item?._id} item={item} />)
                   : <div className="flex w-full h-[450px] flex-col justify-center items-center">
                     <h3 className="text-2xl font-bold text-center">! Oops you have not  added <br/> any item</h3>
                     <Link className="bg-primaryLight rounded-lg p-2 text-white text-center my-4" href={"/menu"}>Browse menus</Link>
                   </div>
                  }
                </div>
                {/* all cart items container end*/}
              </>
            ) : (
              <>
                {/* address div start */}
                <div>
                  <h3 className="text-xl mb-8 font-semibold">Billing Details</h3>
                  <div>
                    <form>
                      <div className="grid lg:grid-cols-2 gap-5">
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Full name</label>
                          <input
                            required
                            defaultValue={session?.data?.user?.name}
                            placeholder="Enter w-full your name"
                            className="border mt-2 rounded-xl p-3"
                            type="text"
                            name="name"
                            disabled={ship === "no"}
                          />
                        </div>
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Mobile number</label>
                          <input
                            required
                            defaultValue={"01560606376"}
                            placeholder="Enter w-full your number"
                            className="border mt-2 rounded-xl p-3"
                            type="number"
                            name="number"
                            disabled={ship === "no"}
                          />
                        </div>
                      </div>
                      <div className="grid mt-5 lg:grid-cols-2 gap-5">
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Delivery address</label>
                          <input
                            placeholder="Enter  your address"
                            defaultValue={"Dhaka, Bangladesh"}
                            required
                            className="border mt-2 w-full rounded-xl p-3"
                            type="text"
                            name="address"
                            disabled={ship === "no"}
                          />
                        </div>
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Email address</label>
                          <input
                            required
                            placeholder="Enter  your email"
                            defaultValue={session?.data?.user?.email}
                            className="border mt-2 w-full rounded-xl p-3"
                            type="email"
                            name="email"
                            disabled={ship === "no"}
                          />
                        </div>
                      </div>
                      <div className="mt-5">
                        <label>
                          <input
                            type="checkbox"
                            name="ship"
                            className="cursor-pointer"
                            value="cod"
                            onChange={handleCheckboxChange} 
                          />
                          <span className="ml-3">Ship on a different address</span>
                        </label>
                      </div>
                      <div className="mt-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                          Order notes (optional)
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows="4"
                          className="border w-full mt-2 rounded-xl p-3"
                          placeholder="Type your message here..."
                        />
                      </div>
                      <input
                        className={`${ship === "no" ? "hidden" : ""} w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-primary text-white`}
                        type="submit"
                        value="Save"
                      />
                    </form>
                  </div>
                </div>
                {/* address div end */}
              </>
            )}
          </div>
          {/* price calculation */}
          <div className="lg:col-span-2 md:col-span-1 h-[550px] px-6 py-10 border">
            <p className="mb-5 pb-3">Price details {`(${cartData.length} items)`}</p>
            <div className="flex text-base justify-between">
              <p>Total MRP</p>
              <p>${totalMRP}</p>
            </div>
            <div className="flex text-base justify-between">
              <p>Total Price</p>
              <p>${totalPrice}</p>
            </div>
            <div className="flex my-2 text-base justify-between">
              <p>Discount on MRP</p>
              <p>${discountMRP}</p>
            </div>
            <div className="flex text-base justify-between">
              <p>Shipping fee</p>
              <p>{"$10"}</p>
            </div>
            <div className="flex my-2 text-base justify-between">
              <p>Tax fee</p>
              <p>Free</p>
            </div>
            <div className="flex text-sm justify-between">
              <p>Coupon discount</p>
              <button className="text-primary">Apply Coupon</button>
            </div>
            <div className="flex border-t pt-4 mt-4 text-base justify-between">
              <p>Tips for rider</p>
              <div className="flex items-center gap-2">
                <button onClick={()=> setTrip(5)} className={`p-2 w-10 rounded-xl border ${trip === 5 && "bg-primaryGray"}`}>$5</button>
                <button onClick={()=> setTrip(10)} className={`p-2 w-10 rounded-xl border ${trip === 10 && "bg-primaryGray"}`}>$10</button>
                <button ><input onChange={handleChange} name="trip" className="p-2 w-16 rounded-xl border" type="text" placeholder="Other" /></button>
                </div>
            </div>
            <div className="flex border-t pt-4 mt-4 text-base justify-between">
              <p>Total amount</p>
              <p>${totalAmount}</p>
            </div>
            <div className="flex  pt-4 mt-4 text-sm justify-between">
                            <label>
                                <input type="radio" className="cursor-pointer" name="paymentMethod" value="online" />
                                <span className="ml-3">Online payment</span>
                            </label>
                            <label>
                                <input type="radio" name="paymentMethod" className="cursor-pointer" value="cod" />
                                <span className="ml-3">Cash on Delivery</span>
                            </label>
                            </div>
                            {
                                page === "backPack" ? <button disabled={cartData.length === 0} onClick={()=>setPage("address")} className={`w-full uppercase ${cartData.length === 0 && 'bg-primaryLight'} mt-5 text-center py-2 bg-primary text-white`}>Place on processed</button> :
                                <button 
                                onClick={()=>setIsModalOpen(true)}
                                disabled={cartData.length === 0} 
                                className={`w-full uppercase ${cartData.length === 0 && 'bg-primaryLight'} mt-5 text-center py-2 bg-primary text-white`}>Place Order</button>
                            }
                             {/* Modal */}
            {isModalOpen && (
                <div className="fixed px-5 lg:px-0 z-50 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white md:w-[600px] relative rounded-lg p-6 max-w-sm mx-auto">
                        <button onClick={() => setIsModalOpen(false)} className="absolute top-0 right-0 rounded-full shadow-lg p-3 bg-[#FFFFFF] md:w-11">X</button>
                        <h2 className="text-lg font-semibold">Hey {session?.data?.user?.name}</h2>
                        <p className="text-sm">Last task for your order</p>
                        <div className="bg-base-300 p-10 h-[200px]  rounded-xl mx-auto">
                          <Elements stripe={stripePromise}>
                              <CheckoutForm setIsModalOpen={setIsModalOpen} setPage={setPage} refetch={refetch} paymentData={paymentData} />
                          </Elements>
                        </div>
                    </div>
                </div>
            )}
            {/* end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
