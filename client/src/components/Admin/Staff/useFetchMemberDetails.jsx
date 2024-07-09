import { useEffect, useState } from "react";
import { fetchMemberDetails } from "../../Functions/DataFetching";

const useFetchMemberDetails = (memberId) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMemberDetails = async () => {
      try {
        const member = await fetchMemberDetails(memberId);
        setUser(member);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    if (memberId) {
      getMemberDetails();
    }
  }, [memberId]);

  return { user, loading, error };
};

export default useFetchMemberDetails;
