import React, { useState } from "react";

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Basic validation
  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required.";
    if (!formData.email) errors.email = "Email is required.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.message) errors.message = "Message is required.";
    return errors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Submit form logic here
      console.log("Form submitted:", formData);
      alert("Application Submitted Successfully!");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone}</p>}
      </div>

      <div>
        <label>Message:</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      </div>

      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;
