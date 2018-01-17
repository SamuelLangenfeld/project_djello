import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { getCurrentUser, getUsers, getBoard, addBoard } from "../actions";
import React, { Component } from "react";
import Home from "../components/Home";

const mapStateToProps = state => {
  let boards = null;
  if (state.usersReducer.currentUser) {
    boards = state.usersReducer.currentUser.boards;
  }
  return {
    error: state.usersReducer.error,
    boards,
    currentUser: state.usersReducer.currentUser,
    currentBoard: state.usersReducer.currentBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => {
      dispatch(getCurrentUser());
    },
    getUsers: () => {
      dispatch(getUsers());
    },
    selectBoard: e => {
      let boardId = Number(e.target.value);
      dispatch(getBoard(boardId));
    },
    addBoard: data => {
      dispatch(addBoard(data));
    },
    getBoard: data => {
      dispatch(getBoard(data));
    }
  };
};

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
