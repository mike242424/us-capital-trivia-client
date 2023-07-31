import { useState } from "react";
import styled from "styled-components";
import Question from "../components/Question";
import FinalResult from "../components/FinalResult";
import { questions } from "../data/quizData";

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    font-size: 28px;
  }
`;

const Container = styled.div`
  max-width: 1000px;
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
