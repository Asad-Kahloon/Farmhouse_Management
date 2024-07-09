import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeleteMember = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    axios.delete("http://localhost:5000/delete/member/" + id).then((res) => {
      if (res.data.deleted) {
        navigate("/admin/staff");
      }
    });
  }, []);
};

export default DeleteMember;
