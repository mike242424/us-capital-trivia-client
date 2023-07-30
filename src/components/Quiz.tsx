import { useState } from "react";
import styled from "styled-components";
import Question from "./Question";
import FinalResult from "./FinalResult";
import { questions } from "../data/quizData";

const Title = styled.h1`
  text-align: center;
  font-size: 34px;
  margin-bottom: 30px;

  @media (max-width: 518.4px) {
    font-size: 28px;
  }
`;

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;

    setCurrentQuestion(nextQuestion);
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <Container>
      <Title>US Capital Trivia Game</Title>
      {currentQuestion < questions.length ? (
        <Question
          question={questions[currentQuestion].question}
          choices={questions[currentQuestion].choices}
          onAnswer={handleAnswer}
          score={score}
          length={questions.length}
          index={currentQuestion + 1}
        />
      ) : (
        <FinalResult
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </Container>
  );
};

export default Quiz;
