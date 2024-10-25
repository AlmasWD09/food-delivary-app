import DashboardNav from "../../../../components/shared/Dashboard/DashboardNav";
import "../../globals.css";
import TopBar from "../../../../components/shared/Dashboard/TopBar";
import AuthProvider from "@/services/AuthProvider";
import { getServerSession } from "next-auth"; // Adjust the import based on your setup

export const metadata = {
  title: "Delish - Your Favorite Flavors, Delivered",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {" "}
          {/* Pass the session */}
          <div className="flex items-center h-screen relative font-Inter">
            <div className="">
              <DashboardNav />
            </div>
            <div className="h-screen flex-1  overflow-y-auto">
              <div className="sticky top-0 z-50 hidden lg:flex">
                <TopBar />
              </div>

              <div className="w-full bg-gray-100 px-3 pb-3 pt-32 lg:p-5 min-h-screen">
                {children}
              </div>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
