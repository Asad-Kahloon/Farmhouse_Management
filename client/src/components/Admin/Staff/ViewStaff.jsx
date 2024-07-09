import { Link } from "react-router-dom";

import {
  FaEnvelope,
  FaIdCard,
  FaPhone,
  FaBriefcase,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import useFetchStaffMembers from "./useFetchStaffMembers";

function ViewStaff() {
  const { users, loading, error } = useFetchStaffMembers();

  if (loading) {
    return (
      <div className="flex justify-center items-center w-[80vw] mx-auto h-[20vh] mt-10">
        <div className="bg-white flex justify-center items-center font-bold text-3xl px-auto py-4 w-[100%]">
          <p className="text-center mt-4">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center w-[80vw] mx-auto h-[20vh] mt-10">
        <div className="bg-white flex justify-center items-center font-bold text-3xl px-auto py-4 w-[100%]">
          <p className="text-center mt-4">Error Loading staff members.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {users.length > 0 ? (
        users.map((user) => (
          <div
            key={user._id}
            className="w-[80vw] mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <div className="flex w-[80vw] flex-col lg:flex-row items-center lg:items-start">
              <div className="flex flex-col md:flex-row w-[30vw] items-center justify-between lg:justify-around p-6">
                <img
                  className="h-32 w-32 rounded-full object-cover mb-2"
                  src={`http://localhost:5000/public/admins/${
                    user.photo || `default-photo-url.jpg`
                  }`}
                  alt="Profile"
                />
                <div>
                  <h2 className="text-center w-full lg:text-left text-2xl font-bold mb-1">
                    {user.name}
                  </h2>
                  <div className="flex items-center">
                    <FaEnvelope className="text-gray-500 mr-3" />
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center  ">
                <div className="p-6 flex flex-col lg:items-start lg:border-l lg:border-gray-200">
                  <div className="flex items-center mb-3">
                    <FaIdCard className="text-gray-500 mr-3" />
                    <span>{user.cnic}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <FaBriefcase className="text-gray-500 mr-3" />
                    <span>{user.role}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    <FaPhone className="text-gray-500 mr-3" />
                    <span>{user.phone}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-center w-[30vw] ">
                <div className="p-6 flex gap-2 md:flex-col lg:items-center justify-center lg:border-l lg:border-gray-200">
                  <Link
                    to={`updateMember/${user._id}`}
                    className="bg-green-500 text-white font-bold mx-auto p-3 flex items-center mb-3"
                  >
                    <FaEdit className=" mr-3" />
                    <span>Edit</span>
                  </Link>
                  <Link
                    to={`deleteMember/${user._id}`}
                    className="bg-red-500 text-white font-bold p-3 flex items-center mb-3"
                  >
                    <FaTrash className=" mr-3" />
                    <span>Delete</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex justify-center items-center w-[80vw] mx-auto h-[20vh] mt-10">
          <div className="bg-white flex justify-center items-center font-bold text-3xl px-auto py-4 w-[100%]">
            <p className="text-center mt-4">No staff members found.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ViewStaff;
