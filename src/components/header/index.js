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

  const handleShowSidebar = () => {
    dispatch(show());
  };

  const handleAddItem = () => {
    const arr = [10, 100, 1000];
    const num = Math.floor(
      Math.random() * arr[Math.floor(Math.random() * arr.length)]
    );
    dispatch(addItem(num));
  };

  return (
    <CustomHeader>
      <Button onClick={handleAddItem}>add item</Button>
      <Button onClick={() => dispatch(sortItems())}>sort items</Button>
      <Button onClick={() => dispatch(clearItems())}>refresh</Button>
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
