import { combineReducers } from "redux";

import * as Actions from "./actions";

const initialState = {
  users: [],
  currentUser: null,
  isFetching: false,
  error: null
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_CURRENT_USER_REQUEST:
      return { ...state, isFetching: true, error: null };
    case Actions.GET_CURRENT_USER_FAILURE:
      return { ...state, isFetching: false, error: action.error };

    case Actions.GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.data,
        isFetching: false,
        error: null
      };

    case Actions.GET_CURRENT_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.data,
        isFetching: false,
        error: null
      };

    case Actions.NEW_LIST_REQUEST:
      return { ...state, isFetchingList: true, error: null };
    case Actions.NEW_LIST_FAILURE:
      return { ...state, isFetchingList: false, error: action.error };

    case Actions.NEW_LIST_SUCCESS:
      lists = [...state.currentBoard.lists];
      let savedList = action.data;
      lists.push(savedList);
      let board = { ...state.currentBoard };
      board.lists = lists;
      return {
        ...state,
        isFetchingList: false,
        error: null,
        currentBoard: board
      };

    case Actions.NEW_CARD_SUCCESS:
      let savedCard = action.data;
      let lists = [...state.currentBoard.lists];
      let list = lists.find(list => list.id === savedCard.list);
      list.cards.push(savedCard);
      board = state.currentBoard;
      board.lists = lists;
      return {
        ...state,
        isFetchingCard: false,
        error: null,
        currentBoard: board
      };

    case Actions.GET_BOARD_SUCCESS:
      board = action.data;
      return {
        ...state,
        isFetching: false,
        error: null,
        currentBoard: board
      };

    case Actions.GET_CARD_SUCCESS:
      let card = action.data;
      return {
        ...state,
        isFetching: false,
        error: null,
        currentCard: card
      };

    case Actions.UNSELECT_CARD:
      return {
        ...state,
        currentCard: null
      };

    case Actions.ADD_MEMBER_SUCCESS:
      return {
        ...state,
        currentCard: action.data
      };

    default:
      return state;
  }
}

export const djelloApp = combineReducers({ usersReducer });
