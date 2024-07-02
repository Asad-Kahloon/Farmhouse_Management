import { Routes, Route } from "react-router-dom";

import Home_Page from "./Home/Home_Page";
import Home from "./Home/Home";
import Login from "./Home/Login";
import RoleCheck from "./Home/RoleCheck";

import Admin from "./Admin/Admin";

function Rout() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />}>
          <Route index element={<Home_Page />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="authentication" element={<RoleCheck />}></Route>
        </Route>

        <Route path="/admin" element={<Admin />} />
      </Routes>
    </>
  );
}

export default Rout;
