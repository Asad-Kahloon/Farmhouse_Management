import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Admin() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-screen">
        <AdminNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default Admin;
