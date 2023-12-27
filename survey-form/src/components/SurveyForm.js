import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SurveyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nationality, setNationality] = useState("");
  const [gender, setGender] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:6675/api/survey/", {
          name,
          email,
          phone,
          address,
          gender,
          nationality,
          message,
        })
        .then(() => toast.success("Feedback sent Success"));
    } catch (error) {}
  };
  return (
    <Container>
      <Toaster />
      <h1>Survey Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-div">
          <label for="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
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
          <label for="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="nationality">Nationality</label>
          <input
            type="text"
            name="nationality"
            id="nationality"
            onChange={(e) => setNationality(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="gender">Gender</label>
          <input
            type="text"
            name="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <div className="input-div">
          <label for="message">Message</label>
          <textarea
            type="text"
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            message
          />
        </div>
        <button className="button">Submit</button>
        <p>
          Are you admin? <Link to="/login">Login</Link>
        </p>
      </form>
    </Container>
  );
};

const Container = styled.div`
  width: 500px;
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
      width: 400px;
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

export default SurveyForm;
