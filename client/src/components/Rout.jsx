import { Routes, Route } from "react-router-dom";
import ProtectedRouts from "./ProtectedRouts";

import Home_Page from "./Home/Home_Page";
import Home from "./Home/Home";
import Login from "./Home/Login";
import RoleCheck from "./Home/RoleCheck";
import Logout from "./Home/Logout";

import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import Staff from "./Staff/Staff";

function Rout() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />}>
          <Route index element={<Home_Page />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="logout" element={<Logout />}></Route>
          <Route path="authentication" element={<RoleCheck />}></Route>
        </Route>

        <Route path="/admin" element={<ProtectedRouts Component={Admin} />}>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="/staff" element={<Staff />} />
      </Routes>
    </>
  );
}

export default Rout;
