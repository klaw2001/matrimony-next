"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/layouts/Layout";

export default function TokenPage() {
  const router = useRouter();
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
    
  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      // Send request to backend to reset password
      const response = await axios.put(`/api/auth/singleuser/${id}`, {
        password,
      });
      if (response.status === 200){
        setSuccess(true);
        setTimeout(() => {
          
          router.push("/login"); // Redirect to login page after successful password reset
        }, 2000);
      }
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <Layout>
      <div className="container">
        <div className="reset-wrapper py-5 m-5">
            <div className="mx-0 mx-lg-5">

          <h2>Reset Password</h2>
          {success ? (
            <p>
              Password reset successfully. Please login with your new password.
            </p>
          ) : (
            <form onSubmit={handleResetPassword}>
              <div className="form-group">
                <label>New Password:</label>
                <input
                className="form-control w-50"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password:</label>
                <input
                className="form-control w-50"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="cta-dark">Reset Password</button>
              {error && <p>{error}</p>}
            </form>
          )}
            </div>
        </div>
      </div>
    </Layout>
  );
}
