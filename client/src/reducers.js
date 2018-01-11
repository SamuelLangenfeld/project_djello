import { combineReducers } from 'redux';

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './actions';

const initialState = {
  users: []
};

function users(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        stocks: [...state.stocks, action.data],
        isFetching: false
      };
    case GET_USERS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const djelloApp = combineReducers({ users });
