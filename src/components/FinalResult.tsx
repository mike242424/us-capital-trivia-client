import React from "react";
import styled from "styled-components";

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
  font-size: 30px;
  font-weight: bold;

  @media (max-width: 750px) {
    font-size: 24px;
  }
`;

const ResultMessage = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const RetryButton = styled.button`
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

const FinalResult: React.FC<FinalResultProps> = ({
  score,
  totalQuestions,
  onRestart,
}) => {
  let message = "";
  if (score === totalQuestions) {
    message = "Congrats! You got all the questions correct!";
  } else if (score > totalQuestions / 2) {
    message = "Good job! You got more than half correct!";
  } else {
    message = "You can do better. Try Again!";
  }

  return (
    <ResultWrapper>
      <FinalScore>
        Final Score: {score} out of {totalQuestions}
      </FinalScore>
      <ResultMessage>{message}</ResultMessage>
      <RetryButton onClick={onRestart}>Retry</RetryButton>
    </ResultWrapper>
  );
};

export default FinalResult;
