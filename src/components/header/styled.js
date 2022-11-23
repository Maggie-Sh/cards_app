import styled from "styled-components";

export const CustomHeader = styled.header`
  width: 100%;
  min-height: 62px;
  padding: 20px 30px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 15px;
    gap: 20px;
  }
  @media (max-width: 420px) {
    gap: 10px;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: calc(100% + 5px);
    width: 100%;
    height: 2px;
    background-color: #373e4b;
    transform: scale(0);
    transform-origin: left;
    transition: all 200ms;
  }
  &:disabled {
    color: #bababa;
    cursor: default;
    &::after {
      display: none;
    }
  }
  &:hover {
    &::after {
      transform: scale(1);
    }
  }
  &.help-btn {
    display: none;
    margin-left: auto;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    &.show {
      display: block;
    }
  }
  @media (max-width: 420px) {
    font-size: 14px;
  }
`;
