import axios from "axios";

export const MemberUpdate = (id, formData) => {
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
      .put(`http://localhost:5000/update/member/` + id, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        if (res.data.updated) {
          alert("Details Updated successfully");
        }
      })
      .catch((err) => console.log(err));
  }
};
