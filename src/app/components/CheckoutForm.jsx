"use client"

import useAxiosPublic from "@/hooks/useAxiosPublic";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({setIsModalOpen,setPage,refetch,paymentData}) => {
    const stripe = useStripe()
    const elements = useElements()
    const [err,setErr] = useState('')
    const [clientSecret,setClientSecret] = useState("")
    const axiosPub = useAxiosPublic()
    const router = useRouter();

    useEffect(()=>{
        axiosPub.post("/payment/intent",{price: paymentData?.totalAmount})
        .then(res =>{
           
            setClientSecret(res.data.clientSecret)
        })
    },[axiosPub,paymentData?.totalAmount])
   

    const handleSubmit = async(e) => {
        e.preventDefault()
        
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return
        }

        const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if(error){
            console.log("payment error", error)
            setErr(error.message)
        }
        else{
            console.log("payment method", paymentMethod)
            setErr("")
        }
        // confirm payment
        const {paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method : {
                card : card,
                billing_details : {
                    name: paymentData?.userName || "anonymus" ,
                    email : paymentData?.userEmail || "anonymus",
                    
                }
            }
        })

        if(confirmError){
            console.log("confirm error", confirmError)
        }else {
            console.log("payment intent",paymentIntent)
            if(paymentIntent?.status === "succeeded"){
                console.log("transaction id", paymentIntent?.id)

                const payment = {
                    paymentData,
                    tran_id: paymentIntent?.id,
                    status : "pending",
                    date : new Date()
                }
                const res = await axiosPub.post("/payment/success",payment)
                
                console.log(res,"from77 line")
                if(res?.data?.result?.acknowledged === true && res?.data?.result2?.deletedCount >0){
                    refetch()
                    toast.success("Your order has been success")
                    router.push('/');
                    setIsModalOpen(false)
                }
            }
        }
    }

    return (
        <div>
           <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                style: {
                    base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                        color: '#aab7c4',
                    },
                    },
                    invalid: {
                    color: '#9e2146',
                    },
                },
                }}
            />
            
             <button disabled={!stripe || !clientSecret} type="submit" className="btn rounded-xl  px-5 mt-10 text-white btn-outline bg-primaryLight">Pay</button>
            </form>
            {
                err && <span className="text-red-600 text-base">{err}</span>
            }
        </div>
    );
};

export default CheckoutForm;