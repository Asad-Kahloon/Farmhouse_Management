import { Routes, Route } from "react-router-dom";
import ProtectedRouts from "./ProtectedRouts";

import Home_Page from "./Home/Home_Page";
import Home from "./Home/Home";
import Login from "./Home/Login";
import RoleCheck from "./Home/RoleCheck";
import Logout from "./Home/Logout";

import Admin from "./Admin/Admin";
import Register from "./Admin/Register";
import Profile from "./Admin/Profile";
import ViewStaff from "./Admin/Staff/ViewStaff";
import DeleteMember from "./Functions/Delete/MemberDelete";
import UpdateMember from "./Functions/Update/UpdateMember";
import AdminProtectedRouts from "./AdminProtectedRoutes";

import UnauthorizedAccess from "./UnAuthorizedAccess";

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
          <Route path="profile" element={<Profile />} />
          <Route path="staff" element={<ViewStaff />} />
          <Route path="staff/deleteMember/:id" element={<DeleteMember />} />
          <Route path="staff/updateMember/:id" element={<UpdateMember />} />
          <Route
            path="register"
            element={<AdminProtectedRouts Component={Register} />}
          ></Route>
        </Route>

        <Route path="/unauthorized" element={<UnauthorizedAccess />}></Route>
      </Routes>
    </>
  );
}

export default Rout;
