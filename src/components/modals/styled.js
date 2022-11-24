import styled from "styled-components";

export const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  z-index: 2;
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 15px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  text-align: center;
  margin-bottom: 20px;
  & span {
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const TextButton = styled.button`
  text-transform: uppercase;
  font-size: 18px;
  &.bold {
    font-weight: 700;
  }
`;
