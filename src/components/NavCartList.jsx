"use client";


import axios from "axios";
import Image from "next/image";

import { useEffect, useState } from "react";

const NavCartList = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

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

   

    return (
        <>
            {items.map((item, index) => (
                <li key={index} className="gap-2 hover:underline cursor-pointer hover:bg-primary hover:text-white flex  p-4 border-b-2 border-secondary w-full">
                    <Image width={40} height={30} src={item.image} className="w-[40px] h-[30px]"  alt={item.title}/>
                    <span>{item.title}</span> 
                </li>
            ))}
        </>
    );
};

export default NavCartList;
