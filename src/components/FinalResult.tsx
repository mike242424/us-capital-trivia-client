import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Spinner from "./Spinner";

type FinalResultProps = {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
};

const ResultWrapper = styled.div`
  margin: 20px;
  padding: 20px 20px 40px 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
`;

const FinalScore = styled.h2`
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

const SubmitInitialsButton = styled.button`
  font-size: 18px;
  margin: 5px;
  padding: 20px 40px;
  background-color: #20c997;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1a9982;
  }

  @media (max-width: 750px) {
    font-size: 12px;
    padding: 10px 20px;
  }
`;

const InitialsInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  margin-right: 20px;
  width: 200px;
  height: 35px;

  &:focus {
    outline-color: #20c997;
  }

  @media (max-width: 750px) {
    font-size: 12px;
    width: 110px;
    height: 10px;
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  min-height: 100vh;
`;

const FinalResult: React.FC<FinalResultProps> = ({ score, totalQuestions }) => {
  const [initials, setInitials] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    axios.post(import.meta.env.VITE_API_URL, {
      initials,
      score,
    });
    setIsLoading(false);
    navigate("/highscores");
  };

  if (isLoading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );

  return (
    <ResultWrapper>
      <FinalScore>
        Final Score: {score} out of {totalQuestions}
      </FinalScore>
      <form onSubmit={handleSubmit}>
        <InitialsInput
          type="text"
          maxLength={3}
          minLength={3}
          placeholder="Enter Your Initials..."
          onChange={(e) => setInitials(e.target.value)}
          required
        />
        <SubmitInitialsButton type="submit">Submit</SubmitInitialsButton>
      </form>
    </ResultWrapper>
  );
};

export default FinalResult;
