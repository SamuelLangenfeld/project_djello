import { connect } from 'react-redux';
// import serialize from 'form-serialize';
import { getUsers } from '../actions';
import React, { Component } from 'react';
import UserList from '../components/UserList';

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => {
      dispatch(getUsers());
    }
  };
};

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(
  UserList
);

export default UserListContainer;
