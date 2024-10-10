"use client";
import OrderCartCard from "@/components/cards/OrderCartCard";
import axios from "axios";
import { useEffect, useState } from "react";


const OrderPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("backPack");
  const [ship, setShip] = useState("no");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cart-menu/tariquelislam2015@gmail.com`);
        setItems(response.data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) {
    return <li>Loading...</li>;
  }

  const handleCheckboxChange = (event) => {
    setShip(event.target.checked ? "yes" : "no");
  };

  const totalPrice = items.reduce((total, item) => {
    return total + item.price;
  }, 0);
  

  const totalMRP = 139
  const discountMRP = totalMRP - totalPrice
  const totalAmount = totalPrice + 10

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
                  {items.map((item) => <OrderCartCard key={item?._id} item={item} />)}
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
                            defaultValue={"Ahmed Antor"}
                            placeholder="Enter w-full your name"
                            className="border mt-2 rounded-xl p-3"
                            type="text"
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
                            disabled={ship === "no"}
                          />
                        </div>
                      </div>
                      <div className="grid mt-5 lg:grid-cols-2 gap-5">
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Delivery address</label>
                          <input
                            placeholder="Enter  your address"
                            defaultValue={"Bhulta Gausiya, Rupganj, Narayanganj"}
                            required
                            className="border mt-2 w-full rounded-xl p-3"
                            type="text"
                            disabled={ship === "no"}
                          />
                        </div>
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Email address</label>
                          <input
                            required
                            placeholder="Enter  your email"
                            defaultValue={"ahmedAntor@gmail.com"}
                            className="border mt-2 w-full rounded-xl p-3"
                            type="email"
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
                        className={`${ship === "no" ? "hidden" : ""} w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-pink-600 text-white`}
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
          <div className="lg:col-span-2 md:col-span-1 h-[450px] px-6 py-10 border">
            <p className="mb-5 pb-3">Price details {`(${items.length} items)`}</p>
            <div className="flex text-base justify-between">
              <p>Total MRP</p>
              <p>{"$139"}</p>
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
              <button className="text-pink-600">Apply Coupon</button>
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
                                page === "backPack" ? <button onClick={()=>setPage("address")} className="w-full uppercase  mt-5 text-center py-2 bg-pink-600 text-white">Place on processed</button> :
                                <button className="w-full uppercase  mt-5 text-center py-2 bg-pink-600 text-white">Place Order</button>
                            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
