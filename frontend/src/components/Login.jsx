import React, { useEffect, useState } from "react";
import './Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // Custom CSS file for styling

function Login() {
  const [form, setForm] = useState({});
  const [user, setUser] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/webdevwizardusers/login", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Login successful:", result);
        navigate("/");
      } else {
        setErrorMessage("Invalid email or password.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setErrorMessage("An error occurred. Please try again.");
    }
  };

  const userdataFromdb = async () => {
    try {
      const dataa = await fetch("http://localhost:3000/webdevwizardusers", {
        method: "GET",
      });
      const dataFromDb = await dataa.json();
      setUser(dataFromDb);
      console.log(dataFromDb);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    userdataFromdb();
  }, []);

  return (
    <div className="login-container mt-5">
      <div className="card shadow-lg p-4 login-card mt-5 w-25 mx-auto">
        <h3 className="card-title text-center text-primary">Welcome Back</h3>
        <p className="text-center text-secondary ">Login to your account</p>
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit} className="">
          <div className="mb-3 ">
            <label htmlFor="email" className="form-label ">
              Email
            </label>
            <input
              type="email"
              className="form-control p-1"
              name="email"
              onChange={handleForm}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control p-1"
              name="password"
              onChange={handleForm}
              required
            />
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-outline-primary w-25 p-1">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;