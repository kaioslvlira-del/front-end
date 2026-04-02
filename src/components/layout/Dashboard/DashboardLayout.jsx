import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <SideBar />

      <main className="flex-1 bg-[#0D0D0D] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
