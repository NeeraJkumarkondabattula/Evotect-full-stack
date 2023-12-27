import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:6675/api/survey/login", {
          email,
          password,
        })
        .then((res) => {
          toast.success("Login Success");
          navigate("/feedbacks");
        });
    } catch (err) {
      toast.error(err.response.message);
    }
  };
  return (
    <Container>
      <Toaster />
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label for="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="password">Password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="button">Login</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 400px;
  padding: 1rem;
  background-color: white;
  h1 {
    text-align: center;
    color: #233142;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    div {
      width: 300px;
      height: auto;
      display: flex;
      flex-direction: column;
      input,
      textarea {
        padding: 0.2rem;
        border: 1px solid #233142;
        outline: none;
      }
      label {
        font-weight: 600;
        color: #233142;
      }
    }
    .button {
      width: 100px;
      height: 30px;
      border: none;
      outline: none;
      color: white;
      font-weight: 600;
      background-color: #233142;
    }
  }
`;

export default Login;
