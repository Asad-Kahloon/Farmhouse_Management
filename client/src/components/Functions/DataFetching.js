// Fetching logged in user details for navbar

export const fetchLoggedInUser = () => {
  try {
    const role = localStorage.getItem("role");
    const name = localStorage.getItem("name");
    const photo = localStorage.getItem("photo");
    const cnic = localStorage.getItem("cnic");
    const phone = localStorage.getItem("phone");
    const email = localStorage.getItem("email");

    const photoUrl = `http://localhost:5000/public/admins/${photo}`;
    const Role = role.toUpperCase();
    const Name = name.toUpperCase();

    if (role && name && photo) {
      return {
        role: Role,
        name: Name,
        photo: photoUrl,
        cnic,
        phone,
        email,
      };
    } else {
      return {
        role: null,
        name: null,
        photo: null,
      };
    }
  } catch (error) {
    console.error("Error fetching user data from local storage", error);
    return {
      role: null,
      name: null,
      photo: null,
    };
  }
};
