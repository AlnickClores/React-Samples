import React, { useState } from "react";
import Form from "../components/Form";

const FormPage = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      alert("Please fill in all fields");
      return;
    }
    console.log("Form submitted", user);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1>This is the form page</h1>
      <Form handleSubmit={handleSubmit} handleChange={handleChange} />
    </div>
  );
};

export default FormPage;
