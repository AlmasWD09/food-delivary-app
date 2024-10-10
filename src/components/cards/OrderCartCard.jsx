"use client";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";

const OrderCartCard = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState(null);

    const handleDelete = (id) => {
        setId(id);
        setIsModalOpen(true); 
    };

    const confirmDelete = async() => {
      
        const response = await axios.delete(`http://localhost:5000/cart-menu-delete/${id}`)
        if(response?.data?.deletedCount > 0){
            alert("You have successfully remove this item")
        }
        setIsModalOpen(false); 
    };

    const cancelDelete = () => {
        setIsModalOpen(false); 
    };

    return (
        <div className="border relative flex lg:flex-row flex-col items-center gap-5 p-4" key={item.id}>
            <div>
               
                <Image width={128} height={96} src={item.image} alt=""  className="md:w-32 bg-center rounded-lg object-cover w-36 h-28 md:h-24"/>
            </div>
            <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-base">{item.description.slice(0, 65)}</p>
                
                <p>
                    Quantity: <span className="font-semibold">{item.quantity}</span>
                </p>
                <p className="my-2">Total:  <span className="font-semibold text-xl">${item?.price}</span></p>
                <button onClick={() => handleDelete(item._id)} className="absolute text-xl font-semibold top-2 right-2">
                    <TiDeleteOutline />
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed px-5 lg:px-0 z-30 inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm mx-auto">
                        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
                        <p>Are you sure you want to delete this item?</p>
                        <div className="flex justify-between mt-4">
                            <button onClick={confirmDelete} className="bg-red-500 text-white rounded px-4 py-2">
                                Confirm
                            </button>
                            <button onClick={cancelDelete} className="bg-gray-300 rounded px-4 py-2">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OrderCartCard;
