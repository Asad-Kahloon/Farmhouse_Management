import { Routes, Route } from "react-router-dom";

import Home_Page from "./Home/Home_Page";
import Home from "./Home/Home";
import Login from "./Home/Login";

function Rout() {
  return (
    <>
      <Routes>
        <Route to="/" element={<Home />}>
          <Route index element={<Home_Page />}></Route>
          <Route path="login" element={<Login />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default Rout;
