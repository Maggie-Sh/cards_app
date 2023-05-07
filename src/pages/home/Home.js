import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";
import {
  HomeContainer,
  Cards,
  Container,
  EmptyList,
  CardsContainer,
} from "./styled";
import { useSelector } from "react-redux";
import Card from "../../components/card/Card";

const Home = () => {
  const cards = useSelector((state) => state.cards);

  return (
    <Container>
      <HomeContainer>
        <Header />
        <CardsContainer>
          {cards?.length ? (
            <Cards>
              {cards.map((num) => (
                <Card key={num} num={num} />
              ))}
            </Cards>
          ) : (
            <EmptyList>Nothing to show yet...</EmptyList>
          )}
        </CardsContainer>
        <Footer />
      </HomeContainer>
      <SideBar />
    </Container>
  );
};

export default Home;
