import styled from "styled-components";

export const CardWrapper = styled.div`
  aspect-ratio: 2/1;
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #373e4b;
  font-size: 28px;
  font-weight: 500;
  box-shadow: 4px 8px 12px rgba(0, 0, 0, 0.1);
  position: relative;
  cursor: default;
  @media (hover: hover) {
    &:hover {
      transform: scale(1.02);
    }
  }
`;

export const IconButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
`;
