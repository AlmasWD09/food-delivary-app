import DashboardNav from "@/components/shared/Dashboard/DashboardNav";
import "../../globals.css";
import TopBar from "@/components/shared/Dashboard/TopBar";

export const metadata = {
  title: "Delish -  Your Favorite Flavors, Delivered",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center h-screen relative">
          <div className=" absolute lg:static z-50 top-0   font-Manrope font-bold w-full lg:w-fit">
            <DashboardNav />
          </div>
          <div className=" h-screen flex-1  font-Manrope  overflow-y-auto ">
            <div className="sticky top-0 hidden lg:flex ">
              <TopBar />
            </div>
            <div className=" bg-gray-100 px-3 pb-3  pt-32  lg:p-5 min-h-[calc(100vh-100px)] ">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
