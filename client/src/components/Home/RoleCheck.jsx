import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RoleCheck = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem("role");

    if (role === "admin" || role === "staff member") {
      alert("logging in");
      navigate("/admin");
    } else {
      console.error("No valid role found in local storage");
    }
  }, [navigate]);

  return null;
};

export default RoleCheck;
