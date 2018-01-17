import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { getCurrentUser } from "../actions";
import React, { Component } from "react";
import User from "../components/User";

const mapStateToProps = state => {
  return {
    currentUser: state.usersReducer.currentUser,
    isFetching: state.usersReducer.isFetching
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => {
      dispatch(getCurrentUser());
    }
  };
};

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);

export default UserContainer;
