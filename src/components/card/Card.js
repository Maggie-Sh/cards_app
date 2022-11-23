import React, { useState } from "react";
import { CardWrapper, IconButton } from "./styled";
import closeIcon from "../../assets/closeIcon.svg";
import DeleteModal from "../modals/DeleteModal";

const Card = ({ num }) => {
  const [deletingItem, setDeletingItem] = useState(null);

  return (
    <>
      <CardWrapper>
        <IconButton onClick={() => setDeletingItem(num)}>
          <img src={closeIcon} alt="x" width="20" height="20" />
        </IconButton>
        <p>{num}</p>
      </CardWrapper>
      {deletingItem !== null && (
        <DeleteModal num={num} handleClose={() => setDeletingItem(null)} />
      )}
    </>
  );
};

export default Card;
