import React from "react";
import { Modal, Title, Actions, TextButton } from "./styled";
import { Background } from "../../shared/styled";
import { deleteItem } from "../../features/cards/cardsSlice";
import { useDispatch } from "react-redux";

const DeleteModal = ({ num, handleClose }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(num));
    handleClose();
  };

  return (
    <>
      <Background onClick={handleClose} />
      <Modal>
        <Title>
          Are you sure you want do delete <span>{num}</span>?
        </Title>
        <Actions>
          <TextButton className="bold" onClick={handleDeleteItem}>
            delete
          </TextButton>
          <TextButton onClick={handleClose}>cancel</TextButton>
        </Actions>
      </Modal>
    </>
  );
};

export default DeleteModal;
