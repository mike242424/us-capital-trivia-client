import React from "react";
import styled from "styled-components";

type QuestionProps = {
  question: string;
  choices: string[];
  score: number;
  length: number;
  index: number;
  onAnswer: (answer: string) => void;
};

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);
`;

const QuestionTitle = styled.h2`
  font-size: 36px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 22px;
  }
`;

const ChoiceButton = styled.button`
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
    width: 60%;
  }
`;

const ScoreText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;

  @media (max-width: 750px) {
    font-size: 18px;
  }
`;

const Question: React.FC<QuestionProps> = ({
  question,
  choices,
  score,
  length,
  index,
  onAnswer,
}) => {
  return (
    <QuestionWrapper>
      <QuestionTitle>
        {index}. {question}
      </QuestionTitle>
      <div>
        {choices.map((choice) => (
          <ChoiceButton key={choice} onClick={() => onAnswer(choice)}>
            {choice}
          </ChoiceButton>
        ))}
      </div>
      <ScoreText>
        Current Score: {score} out of {length}
      </ScoreText>
    </QuestionWrapper>
  );
};

export default Question;
