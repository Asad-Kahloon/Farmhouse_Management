import axios from "axios";

export const StaffRegister = (formData) => {
  const cnicPattern = /^\d{5}-\d{7}-\d{1}$/;
  if (!cnicPattern.test(formData.cnic)) {
    alert("Please enter a valid CNIC in the format 12345-1234567-1");
    return;
  } else if (formData.password === formData.confirmPassword) {
    // Create form data object to append fields and file
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    axios
      .post("http://localhost:5000/admin/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.admin_registered) {
          alert("Staff Member registered successfully");
          return true;
        } else if (res.data.cnic || res.data.email) {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  } else {
    alert("Passwords do not match...");
  }
};
