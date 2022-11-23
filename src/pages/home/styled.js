import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

export const CardsContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #bababa;
    border-radius: 10px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 45%);
    gap: 40px;
  }
  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 100%);
    gap: 40px;
  }
`;

export const EmptyCards = styled.p`
  color: #bababa;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;
