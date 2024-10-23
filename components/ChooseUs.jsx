import { Icon } from "@iconify/react";


const ChooseUs = () => {
    return (
        <>
            <div className="container mx-auto px-2">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold">Why Choose Us</h1>
                    <p>You will choose because you get the best <br /> quality food</p>
                </div>

                {/* choose curd here */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 pt-10 px-2">
                    <div className="lg:max-w-[400px] flex flex-col justify-center items-center text-center border rounded-lg px-20 py-10">
                    <span className="text-primary text-8xl"><Icon icon="carbon:fruit-bowl" /></span>
                        <h3 className="text-2xl font-semibold text-black/80">Serve Healhy Food</h3>
                        <p>simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="lg:max-w-[400px] flex flex-col justify-center items-center text-center border border-primary rounded-lg px-20 py-10">
                    <span className="text-primary text-8xl"><Icon icon="bitcoin-icons:verify-outline" className="text-9xl"/></span>
                        <h3 className="text-2xl font-semibold text-black/80">Best Quality</h3>
                        <p>simply dummy text of the printing and typesetting industry.</p>
                    </div>

                    <div className="lg:max-w-[400px] flex flex-col justify-center items-center text-center border rounded-lg px-20 py-10">
                    <span className="text-primary text-8xl"><Icon icon="hugeicons:container-truck-02" /></span>
                        <h3 className="text-2xl font-semibold text-black/80">Fast Delivery</h3>
                        <p>simply dummy text of the printing and typesetting industry.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseUs;