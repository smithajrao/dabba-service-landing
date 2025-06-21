import React, { useState } from "react";
import axios from "axios";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/users", formData);
      alert("Successfully joined waitlist!");
    } catch (error) {
      alert("Error submitting form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow rounded">
      <input name="name" placeholder="Name" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input name="email" placeholder="Email" className="border p-2 mb-2 w-full" onChange={handleChange} />
      <input name="phone" placeholder="Phone" className="border p-2 mb-4 w-full" onChange={handleChange} />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Join Waitlist</button>
    </form>
  );
}
