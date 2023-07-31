import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerContainer = styled.div`
  display: inline-block;
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #20c997;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spinAnimation} 1s linear infinite;
`;


const Spinner = () => {
  return (
    <SpinnerContainer/>
  );
};

export default Spinner;
