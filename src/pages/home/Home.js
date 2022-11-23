import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideBar from "../../components/sidebar";
import {
  HomeContainer,
  Cards,
  Container,
  EmptyCards,
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
                <Card key={num + Math.random()} num={num} />
              ))}
            </Cards>
          ) : (
            <EmptyCards>Nothing to show...</EmptyCards>
          )}
        </CardsContainer>
        <Footer />
      </HomeContainer>
      <SideBar />
    </Container>
  );
};

export default Home;
