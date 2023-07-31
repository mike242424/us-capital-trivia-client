import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  margin-top: 50px;
  margin-bottom: 30px;

  @media (max-width: 750px) {
    font-size: 28px;
  }
`;

const NotFound = () => {
  return <Title>404 Not Found</Title>;
};

export default NotFound;
