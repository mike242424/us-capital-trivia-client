import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #20c997;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const SpinnerTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #20c997;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: ${spinAnimation} 1s linear infinite;
`;

const Spinner = () => {
  return (
    <SpinnerOne>
      <SpinnerTwo />
    </SpinnerOne>
  );
};

export default Spinner;
