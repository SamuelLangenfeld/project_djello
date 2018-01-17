import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { unselectCard, addMember, removeMember } from "../actions";
import React, { Component } from "react";
import CardModal from "../components/CardModal";
import serialize from "form-serialize";

const mapStateToProps = (state, ownProps) => {
  let modal = false;
  if (state.usersReducer.currentCard) {
    modal = true;
  }
  return {
    users: state.usersReducer.users,
    modal,
    ...state.usersReducer.currentCard,
    boardId: state.usersReducer.currentBoard.id
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    unselectCard: () => {
      dispatch(unselectCard());
    },
    addMember: e => {
      e.preventDefault();
      const form = e.currentTarget;
      const body = serialize(form, { hash: true, empty: true });
      let userId = Number(body.userId);
      let cardId = Number(body.cardId);
      dispatch(addMember({ userId, cardId }));
    },
    removeMember: e => {
      e.preventDefault();
      const form = e.currentTarget;
      const body = serialize(form, { hash: true, empty: true });
      let userId = Number(body.userId);
      let cardId = Number(body.cardId);
      let boardId = Number(body.boardId);
      dispatch(removeMember({ userId, cardId, boardId }));
    }
  };
};

const CardModalContainer = connect(mapStateToProps, mapDispatchToProps)(
  CardModal
);

export default CardModalContainer;
