import React, { useState } from "react";
import { CustomHeader, Button } from "./styled";
import { show } from "../../features/show-sidebar/showSidebarSlice";
import { addItem, clearList, sortItems } from "../../features/cards/cardsSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ num }) => {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.showSidebar);
  const cards = useSelector((state) => state.cards);
  const [myNum, setMyNum] = useState(num);
  console.log(num, num === myNum);

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
    if (cards?.includes(num)) {
      num = getRandomNumber();
    }
    dispatch(addItem(num));
  };

  return (
    <CustomHeader>
      <Button onClick={handleAddItem}>add item</Button>
      <Button disabled={!cards?.length} onClick={() => dispatch(sortItems())}>
        {/* sort items */}
        {myNum}
        {num}
      </Button>
      <Button disabled={!cards?.length} onClick={() => dispatch(clearList())}>
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
