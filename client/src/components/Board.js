import React from "react";
import ListsContainer from "../containers/ListsContainer";
import CardModalContainer from "../containers/CardModalContainer";
import Modal from "./Modal";

const Board = ({ currentBoard, newList }) => {
  if (!currentBoard) {
    return null;
  }
  let lists = null;
  if (currentBoard.lists) {
    lists = <ListsContainer />;
  }
  return (
    <div className="boardContainer">
      <h2>{currentBoard.name}</h2>

      <Modal
        submitHandler={newList}
        label="Create a New List"
        ownerId={currentBoard.id}
      />
      {lists}
      <CardModalContainer />
    </div>
  );
};

export default Board;
