import Navbar from "@/Component/shared/Navbar";
import "./globals.css";
import Footer from "@/Component/shared/Footer";

export const metadata = {
  title: "Delish -  Your Favorite Flavors, Delivered",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="sticky z-[9999] top-0 ">
          <Navbar />
        </div>

        {/* don't remove height  */}
        <div className=" font-poppins min-h-[calc(100vh-96px)]  ">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
