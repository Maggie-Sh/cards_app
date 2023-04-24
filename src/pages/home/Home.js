import React, {
  useState,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  useRef,
  useId,
  useMemo,
} from "react";
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
import { ThemeContext } from "../../App";

const countReducer = (state, action) => {
  const { type, payload } = action;
  console.log(state, action);
  switch (type) {
    case "change":
      return { count: payload };
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "unset":
      return { count: 0 };
    default:
      return state;
  }
};
const initialState = { count: 0 };

const Home = () => {
  const cards = useSelector((state) => state.cards);
  const [num, setNum] = useState(5);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [count, setCount] = useReducer(countReducer, initialState);
  const inputRef = useRef(null);
  const id = useId();

  const numRef = useRef(null);
  const [val, setVal] = useState(5);

  const [sth, setSth] = useState();

  const factorial = useMemo(() => {
    console.log("hello");
    let fact = 1;
    for (let i = 1; i <= val; i++) {
      fact *= i;
    }
    return fact;
  }, [val]);

  useEffect(() => {
    console.log("rendered");
  }, [num]);

  const handleClick = useCallback(() => {
    console.log(count, "callback");
  }, [count]);

  const handleColorClick = (name) => console.log(name);

  return (
    <Container>
      <HomeContainer>
        <Header />
        <div>new edit</div>
        <Header num={num} />
        <button onClick={handleClick}>click me</button>
        <div>
          <button onClick={() => setCount({ type: "decrease" })}>-</button>
          <span>{count?.count}</span>
          <button onClick={() => setCount({ type: "increase" })}>+</button>
          <br />
          <input ref={inputRef} />
          <button
            onClick={() => {
              console.log(inputRef, "red", id);
              setCount({ type: "change", payload: inputRef.current.value });
            }}
          >
            change
          </button>
          &nbsp;
          <button onClick={() => setCount({ type: "unset" })}>unset</button>
        </div>
        <br />
        <br />
        <div>
          <input ref={numRef} />
          <span>{factorial}</span>
          <button onClick={() => setVal(numRef.current.value)}>click me</button>
        </div>
        <div
          // onClick={() => console.log("red")}
          style={{ padding: "30px", backgroundColor: "red" }}
        >
          <div
            onClick={(e) => console.log("violet", sth)}
            style={{ padding: "30px", backgroundColor: "violet" }}
          >
            <div
              onClick={() => handleColorClick("pink")}
              style={{ padding: "30px", backgroundColor: "pink" }}
            ></div>
          </div>
        </div>
        <CardsContainer>
          {cards?.length ? (
            <Cards>
              {cards.map((num) => (
                <Card key={num} num={num} />
              ))}
            </Cards>
          ) : (
            <EmptyList>Nothing to show...</EmptyList>
          )}
        </CardsContainer>
        <Footer />
      </HomeContainer>
      <SideBar />
    </Container>
  );
};

export default Home;
