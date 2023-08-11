import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import Spinner from "../components/Spinner";

interface HighscoresType {
  initials: string;
  score: number;
}

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    font-size: 28px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }

  th {
    background-color: #20c997;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const TryAgainButton = styled.button`
  font-size: 18px;
  margin-top: 20px;
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

const SpinnerWrapper = styled.div`
  display: flex;
  margin-top: 100px;
  justify-content: center;
  min-height: 100vh;
`;

const Highscores = () => {
  const [highscores, setHighscores] = useState<HighscoresType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL)
      .then((res) => {
        setHighscores(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching highscores:", err);
        setIsLoading(false);
      });
  }, []);

  const handleClick = () => {
    navigate("/");
  };

  if (isLoading)
    return (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    );

  return (
    <>
      <Title>Top 10 Highscores</Title>
      {highscores && highscores.length > 0 && (
        <>
          <Table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Initials</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {highscores.slice(0, 10).map((highscore, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{highscore.initials}</td>
                  <td>{highscore.score}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ButtonContainer>
            <TryAgainButton onClick={handleClick}>Try Again</TryAgainButton>
          </ButtonContainer>
        </>
      )}
    </>
  );
};

export default Highscores;
