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
  console.log(cards);

  return (
    <Container>
      <HomeContainer>
        <Header />
        <CardsContainer>
          <Cards>
            {!!cards?.length ? (
              cards.map((num) => <Card key={num + Math.random()} num={num} />)
            ) : (
              <EmptyCards>Nothing to show...</EmptyCards>
            )}
          </Cards>
        </CardsContainer>
        <Footer />
      </HomeContainer>
      <SideBar />
    </Container>
  );
};

export default Home;
