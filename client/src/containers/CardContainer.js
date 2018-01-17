import { connect } from "react-redux";
// import serialize from 'form-serialize';
import { getCard } from "../actions";
import React, { Component } from "react";
import Card from "../components/Card";

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCard: e => {
      dispatch(getCard(ownProps.id));
    }
  };
};

const CardContainer = connect(mapStateToProps, mapDispatchToProps)(Card);

export default CardContainer;
