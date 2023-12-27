import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Feedbacks = () => {
  const [feedbacks, setFeedbacks] = useState();
  useEffect(() => {
    async function fetch() {
      await axios
        .get("http://localhost:6675/api/survey/feedbacks")
        .then((res) => setFeedbacks(res.data));
    }
    fetch();
  }, []);
  console.log(feedbacks);
  return (
    <Container>
      <h1 style={{ textAlign: "center" }}>Feedbacks</h1>
      {feedbacks &&
        feedbacks.map((feedback, index) => {
          return (
            <div className="feedback" key={index}>
              <h1>{feedback.name}</h1>
              <p className="email">{feedback.email}</p>
              <p className="message">"{feedback.message}"</p>
            </div>
          );
        })}
      <p className="link">
        back to survey form ? <Link to="/">Survey Form</Link>
      </p>
    </Container>
  );
};
const Container = styled.div`
  width: 500px;
  min-height: 500px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: white;
  .feedback {
    width: 100%;
    padding: 0.5rem;
    border: 2px solid #233142;
    h1 {
      font-size: 1rem;
      text-transform: capitalize;
      font-weight: 600;
      color: #233142;
    }
    .email {
      font-size: 14px;
      width: 100%;
      height: auto;
      margin-bottom: 0.5rem;
    }
    .message {
      font-size: 12px;
      width: 100%;
      height: auto;
    }
  }
  .link {
    text-align: center;
  }
`;
export default Feedbacks;
