import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100vh;
  background-color: #000;
  opacity: 40%;
  z-index: 1;
  &.sidebar {
    display: none;
    opacity: 10%;
    @media (min-width: 421px), (max-width: 768px) {
      &.show {
        display: block;
      }
    }
  }
`;
