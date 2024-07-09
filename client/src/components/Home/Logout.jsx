import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/logout")
      .then((res) => {
        if (res.data.logout) {
          localStorage.clear();
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  }, []);
};

export default Logout;
