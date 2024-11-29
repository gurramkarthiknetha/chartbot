import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/webdevwizardusers/register",
        user
      );
      setSuccessMessage(response.data.message);
      setEmail("");
      setPassword("");
      setError(null);
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
      setSuccessMessage("");
    }
  };

  return (
    <div className="register ">
      <div className="first ms-5 ">
        <img
          src="https://img.freepik.com/free-vector/hand-drawn-flat-design-homepage-illustration_52683-81353.jpg?ga=GA1.1.2088483355.1732432344&semt=ais_hybrid"
          width="900px"
          alt="Placeholder"
          className="ms-5"
        />
      </div>
      <div className="d-flex align-items-center justify-content-center ">
      <div className=" hh  w-75 me-2" style={{ boxShadow: '1px 2px 15px gray', borderRadius: '5px', border: 'none' }}
        
        >
          <div className="  mt-5 p-4 shadow-lg rounded" style={{ backgroundColor: "#f9f9f9" }}>
            <h3 className="card-title text-primary text-center">Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control p-2 mt-1"
                  style={{ border: "1px solid black" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control p-2 mt-1"
                  style={{ border: "1px solid black" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-outline-primary w-50 p-1">
                  Register
                </button>
              </div>
            </form>
  
            {error && (
              <div className="alert alert-danger mt-3">{error}</div>
            )}
            {successMessage && (
              <div className="alert alert-success mt-3">{successMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
