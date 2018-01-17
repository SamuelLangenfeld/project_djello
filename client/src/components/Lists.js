import React from "react";
import Modal from "./Modal";
import CardContainer from "../containers/CardContainer";

const Lists = ({ lists, newCard }) => {
  let listComponent = lists.map(list => {
    let cards = null;
    if (list.cards.length) {
      cards = list.cards.map(card => {
        return <CardContainer {...card} />;
      });
    }
    return (
      <div className="col-md-3">
        <div className="list">
          <h3>{list.title}</h3>
          <p>{list.description}</p>
          {cards}
          <Modal
            submitHandler={newCard}
            label="Create a New Card"
            ownerId={list.id}
          />
        </div>
      </div>
    );
  });

  return <div className="row">{listComponent}</div>;
};

export default Lists;
