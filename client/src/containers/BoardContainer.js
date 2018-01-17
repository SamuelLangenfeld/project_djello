import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { getUsers, newList } from "../actions";
import React, { Component } from "react";
import Board from "../components/Board";
var serialize = require("form-serialize");

const mapStateToProps = state => {
  return {
    currentBoard: state.usersReducer.currentBoard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    },
    newList: obj => {
      dispatch(newList(obj));
    }
  };
};

const BoardContainer = connect(mapStateToProps, mapDispatchToProps)(Board);

export default BoardContainer;
