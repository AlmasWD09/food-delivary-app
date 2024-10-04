import Image from "next/image";
import { FaArrowRight, FaChartLine, FaHandsHelping, FaUsers } from "react-icons/fa";


const PartnerPage = () => {
    return (
        <div>
             <div
           style={{
            backgroundImage: `url(https://i.ibb.co.com/NmNjB0Y/istockphoto-1253501430-612x612-Man.jpg)`,
          }}
         className="relative w-full bg-fixed h-[500px] bg-no-repeat bg-center object-cover bg-cover">
            <div className="absolute inset-0 bg-gray-900 opacity-60"></div>
        
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="lg:text-6xl text-4xl text-white font-bold">Become a Hero</h3>
                <div className="bg-[#FF4D00] mx-auto md:w-2/3 w-[250px] text-center mt-8 p-4">
                    <h3 className="lg:text-xl text-base text-white flex justify-center items-center gap-4">Home <FaArrowRight/> Join as Hero</h3>
                </div>
            </div>
        </div>
          <div className="lg:max-w-[1240px] px-3 lg:px-0  mx-auto lg:py-24 py-20">
              <h3 className="text-4xl font-bold">Start Your Journey as <br/> a Delivery Driver</h3>
              <p className="w-2/5 my-3">Join our team as a delivery partner and enjoy flexible hours, competitive pay, and the opportunity to be part of a growing network!</p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 py-8">
                  <div className="border  rounded-lg p-4">
                   <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3"><FaUsers className="text-primaryLight" /> Stable Income</h3>
                   <p>Dui sapien eget mi proin sed. Nibh nisl condimentum id venenatis a. Vulputate eu scelerisque felis imperdiet proin fermentum leo.</p>
                 </div>
                  <div className="border rounded-lg p-4">
                   <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3"><FaHandsHelping className="text-primaryLight" /> Friendly Team</h3>
                   <p>Consequat semper viverra nam libero justo laoreet sit. Consequat semper viverra nam libero justo laoreet sit amet cursus. Morbi tincidunt ornare .</p>
                 </div>
                  <div className="border rounded-lg p-4">
                   <h3 className="text-2xl mb-3 font-semibold flex items-center gap-3"><FaChartLine className="text-primaryLight" /> Career Growth</h3>
                   <p>Euismod quis viverra nibh cras pulvinar mattis nunc sed blandit. Neque viverra justo nec ultrices dui sapien. Volutpat est velit egestas.</p>
                 </div>
              </div>
              <div className="mt-24 flex flex-col md:flex-row  md:justify-around gap-10">
             <div className="relative">
               <Image className="rounded-lg z-50 object-cover bg-center md:w-[300px] md:h-[200px] w-[250px] lg:h-[400px] h-[200px] lg:w-[600px]" width={600} height={400} src={"https://i.ibb.co.com/VjQJ6jQ/medium-shot-delivery-man-holding-tablet-23-2149035893.jpg"} alt="delivery man"/>
                <div className="lg:w-[600px] -z-40 md:w-[300px] md:h-[200px]  w-[270px] h-[200px] flex flex-col justify-end p-8 lg:-top-10 md:-top-8 md:-right-8 -top-6  lg:-right-10 absolute lg:h-[400px] border-primaryLight border-4 lg:border-8 rounded-lg">
                    <h3 className="lg:text-3xl md:text-2xl text-xl text-white  font-semibold">Became a Hero</h3>
                    <button  className="bg-primaryLight mt-4 justify-center w-40 flex items-center p-2 gap-2 rounded-lg lg:p-3 text-white">Learn More <FaArrowRight/></button>
                </div>
               </div>
               <div className="md:shadow-xl lg:p-10"> 
                    <form>
                      <div className="grid lg:grid-cols-2 gap-5">
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Full name</label>
                          <input
                            required
                            placeholder="Enter w-full your name"
                            className="border mt-2 rounded-xl p-3"
                            type="text"
                            
                          />
                        </div>
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Mobile number</label>
                          <input
                            required
                            placeholder="Enter w-full your number"
                            className="border mt-2 rounded-xl p-3"
                            type="number"
                          
                          />
                        </div>
                      </div>
                      <div className="grid mt-5 lg:grid-cols-2 gap-5">
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Your address</label>
                          <input
                            placeholder="Enter  your address"
                            required
                            className="border mt-2 w-full rounded-xl p-3"
                            type="text"
                            
                          />
                        </div>
                        <div className="flex col-span-1 flex-col">
                          <label className="block text-sm font-medium text-gray-700">Email address</label>
                          <input
                            required
                            placeholder="Enter  your email"
                            className="border mt-2 w-full rounded-xl p-3"
                            type="email"
                            
                          />
                        </div>
                      </div>
                     
                      <div className="mt-5">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
                          Have you a message
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
                        className={` w-1/4 rounded-lg cursor-pointer uppercase mt-5 text-center py-2 bg-pink-600 text-white`}
                        type="submit"
                        value="Apply"
                      />
                    </form>
                  </div>
            </div>
          </div>
        </div>
    );
};

export default PartnerPage;