import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminProtectedRouts(props) {
  const { Component } = props;
  const navigate = useNavigate();

  useEffect(() => {
    let role = localStorage.getItem("role");
    console.log(role);
    if (role != "admin") {
      navigate("/unauthorized");
    }
  });

  return (
    <div>
      <Component />
    </div>
  );
}
