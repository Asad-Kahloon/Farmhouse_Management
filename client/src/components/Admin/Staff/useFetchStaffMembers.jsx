// useFetchStaffMembers.js
import { useEffect, useState } from "react";
import { fetchStaffMembers } from "../../Functions/DataFetching";

const useFetchStaffMembers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getStaffMembers = async () => {
      try {
        const members = await fetchStaffMembers();
        setUsers(members);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    getStaffMembers();
  }, []);

  return { users, loading, error };
};

export default useFetchStaffMembers;
