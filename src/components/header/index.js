import React from "react";
import { CustomHeader, Button } from "./styled";
import { show } from "../../features/show-sidebar/showSidebarSlice";
import {
  addItem,
  clearItems,
  sortItems,
} from "../../features/cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);
  const cards = useSelector((state) => state.cards);

  const handleShowSidebar = () => {
    dispatch(show());
  };

  const getRandomIndex = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  const getRandomNumber = () => {
    const zeros = [10, 100, 1000];
    const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return Math.floor(
      Math.random() * getRandomIndex(zeros) + getRandomIndex(digits)
    );
  };

  const handleAddItem = () => {
    let num = getRandomNumber();
    cards?.includes(num) ? getRandomNumber() : dispatch(addItem(num));
  };

  return (
    <CustomHeader>
      <Button onClick={handleAddItem}>add item</Button>
      <Button disabled={!cards?.length} onClick={() => dispatch(sortItems())}>
        sort items
      </Button>
      <Button disabled={!cards?.length} onClick={() => dispatch(clearItems())}>
        refresh
      </Button>
      <Button
        className={`help-btn ${!showSidebar && "show"}`}
        onClick={handleShowSidebar}
      >
        help
      </Button>
    </CustomHeader>
  );
};

export default Header;
