import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { newCard } from "../actions";
import React, { Component } from "react";
import Lists from "../components/Lists";

const mapStateToProps = state => {
  return { lists: state.usersReducer.currentBoard.lists };
};

const mapDispatchToProps = dispatch => {
  return {
    newCard: obj => {
      dispatch(newCard(obj));
    }
  };
};

const ListsContainer = connect(mapStateToProps, mapDispatchToProps)(Lists);

export default ListsContainer;
