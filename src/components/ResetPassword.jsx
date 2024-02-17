"use client";
import axios from "axios";
import React, { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      // Send request to backend to initiate password reset
      const response = await axios.post("/api/auth/reset-password", { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.error);
    }
  };
  return (
    <>
      <div className="form-group ">
        <form onSubmit={handleResetPassword} className="d-flex">
          <input
            type="email"
            className="form-control w-25 rounded-0"
            id="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input type="submit" value="Submit" className="cta-dark" />
        </form>
      </div>
    </>
  );
};

export default ResetPassword;
