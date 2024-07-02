import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin") {
      alert("Admin is logging in");
      navigate("/admin");
    } else if (role === "staff") {
      alert("Staff member is logging in");
      navigate("/login");
    } else {
      console.error("No valid role found in local storage");
    }
  }, [navigate]);

  return null;
};

export default RoleCheck;
