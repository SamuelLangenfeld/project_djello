const fetch = require("isomorphic-fetch");

export const GET_CURRENT_USER_REQUEST = "GET_CURRENT_USER_REQUEST";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_CURRENT_USER_FAILURE = "GET_CURRENT_USER_FAILURE";
export const GET_CURRENT_USER_SUCCESS = "GET_CURRENT_USER_SUCCESS";
export const GET_USERS_REQUEST = "GET_USERS_REQUEST";
export const GET_USERS_FAILURE = "GET_USERS_FAILURE";
export const NEW_LIST_REQUEST = "NEW_LIST_REQUEST";
export const NEW_LIST_SUCCESS = "NEW_LIST_SUCCESS";
export const NEW_LIST_FAILURE = "NEW_LIST_FAILURE";
export const GET_BOARD_REQUEST = "GET_BOARD_REQUEST";
export const GET_BOARD_FAILURE = "GET_BOARD_FAILURE";
export const GET_BOARD_SUCCESS = "GET_BOARD_SUCCESS";
export const NEW_CARD_REQUEST = "NEW_CARD_REQUEST";
export const NEW_CARD_SUCCESS = "NEW_CARD_SUCCESS";
export const NEW_CARD_FAILURE = "NEW_CARD_FAILURE";
export const GET_CARD_REQUEST = "GET_CARD_REQUEST";
export const GET_CARD_FAILURE = "GET_CARD_FAILURE";
export const GET_CARD_SUCCESS = "GET_CARD_SUCCESS";
export const UNSELECT_CARD = "UNSELECT_CARD";
export const ADD_MEMBER = "ADD_MEMBER";
export const ADD_MEMBER_REQUEST = "ADD_MEMBER_REQUEST";
export const ADD_MEMBER_FAILURE = "ADD_MEMBER_FAILURE";
export const ADD_MEMBER_SUCCESS = "ADD_MEMBER_SUCCESS";
export const REMOVE_MEMBER_REQUEST = "REMOVE_MEMBER_REQUEST";
export const REMOVE_MEMBER_FAILURE = "REMOVE_MEMBER_FAILURE";
export const REMOVE_MEMBER_SUCCESS = "REMOVE_MEMBER_SUCCESS";
export const ADD_BOARD_REQUEST = "ADD_BOARD_REQUEST";
export const ADD_BOARD_FAILURE = "ADD_BOARD_FAILURE";
export const ADD_BOARD_SUCCESS = "ADD_BOARD_SUCCESS";

export function newList(data) {
  return dispatch => {
    dispatch(newListRequest());
    let body = {
      title: data.title,
      description: data.description,
      board: data.ownerId
    };

    fetch(`http://localhost:3001/lists`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(list => {
        //get list back. Ok now what? Have to update the boards. Need the user id.
        //
        dispatch(newListSuccess(list));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(newListFailure(error));
      });
  };
}

export function newListFailure(error) {
  return {
    type: NEW_LIST_FAILURE,
    error
  };
}

export function newListRequest() {
  return {
    type: NEW_LIST_REQUEST
  };
}

export function newListSuccess(data) {
  return {
    type: NEW_LIST_SUCCESS,
    data
  };
}

export function getCurrentUserRequest() {
  return {
    type: GET_CURRENT_USER_REQUEST
  };
}

export function getCurrentUserFailure(error) {
  return {
    type: GET_CURRENT_USER_FAILURE,
    error
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
}
export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST
  };
}
export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    error
  };
}

export function getCurrentUserSuccess(data) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    data
  };
}

export function getUsers() {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getUsersRequest());

    fetch(`http://localhost:3001/users`)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Dispatch success which sets the Users.
        dispatch(getUsersSuccess(json));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getUsersFailure(error));
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getCurrentUserRequest());

    fetch(`http://localhost:3001/users/1`)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(user => {
        // Dispatch success which sets the Users.
        dispatch(getCurrentUserSuccess(user));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getCurrentUserFailure(error));
      });
  };
}

export function getBoard(boardId) {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getBoardRequest());

    fetch(`http://localhost:3001/boards/${boardId}`)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(board => {
        // Dispatch success which sets the Users.
        dispatch(getBoardSuccess(board));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getBoardFailure(error));
      });
  };
}

export function getBoardRequest() {
  return {
    type: GET_BOARD_REQUEST
  };
}
export function getBoardFailure(error) {
  return {
    type: GET_BOARD_FAILURE,
    error
  };
}

export function getBoardSuccess(data) {
  return {
    type: GET_BOARD_SUCCESS,
    data
  };
}

export function newCardRequest() {
  return {
    type: NEW_CARD_REQUEST
  };
}
export function newCardFailure(error) {
  return {
    type: NEW_CARD_FAILURE,
    error
  };
}

export function newCardSuccess(data) {
  return {
    type: NEW_CARD_SUCCESS,
    data
  };
}

export function newCard(data) {
  return dispatch => {
    dispatch(newCardRequest());
    let body = {
      title: data.title,
      description: data.description,
      list: data.ownerId
    };

    fetch(`http://localhost:3001/cards`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(card => {
        dispatch(newCardSuccess(card));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(newCardFailure(error));
      });
  };
}

export function getCard(cardId) {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getCardRequest());

    console.log("FETCHING CARD ", cardId);

    fetch(`http://localhost:3001/cards/${cardId}`)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(card => {
        // Dispatch success which sets the Users.
        console.log("CARD RETURNED IS ", card);
        dispatch(getCardSuccess(card));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getCardFailure(error));
      });
  };
}

export function getCardRequest() {
  return {
    type: GET_CARD_REQUEST
  };
}
export function getCardFailure(error) {
  return {
    type: GET_CARD_FAILURE,
    error
  };
}

export function getCardSuccess(data) {
  return {
    type: GET_CARD_SUCCESS,
    data
  };
}

export function unselectCard() {
  return {
    type: UNSELECT_CARD
  };
}

export function addMember(data) {
  return dispatch => {
    dispatch(addMemberRequest());
    fetch(`http://localhost:3001/cards/${data.cardId}/members`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(card => {
        dispatch(addMemberSuccess(card));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(addMemberFailure(error));
      });
  };
}

export function addMemberRequest() {
  return {
    type: ADD_MEMBER_REQUEST
  };
}
export function addMemberFailure(error) {
  return {
    type: ADD_MEMBER_FAILURE,
    error
  };
}

export function addMemberSuccess(data) {
  return {
    type: ADD_MEMBER_SUCCESS,
    data
  };
}

export function removeMember(data) {
  return dispatch => {
    dispatch(removeMemberRequest());
    fetch(`http://localhost:3001/cards/${data.cardId}/members/${data.userId}`, {
      method: "delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        dispatch(removeMemberSuccess());
        dispatch(getBoard(data.boardId));
        dispatch(getCard(data.cardId));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(removeMemberFailure(error));
      });
  };
}

export function removeMemberRequest() {
  return {
    type: REMOVE_MEMBER_REQUEST
  };
}
export function removeMemberFailure(error) {
  return {
    type: REMOVE_MEMBER_FAILURE,
    error
  };
}
export function removeMemberSuccess() {
  return {
    type: REMOVE_MEMBER_SUCCESS
  };
}

export function addBoard(data) {
  return dispatch => {
    dispatch(addBoardRequest());
    fetch(`http://localhost:3001/boards/`, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then(async board => {
        dispatch(getCurrentUser(data.userId));
        dispatch(getBoard(board.id));
        //maybe change getBoard to a setBoard action
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(addBoardFailure(error));
      });
  };
}

export function addBoardRequest() {
  return {
    type: ADD_BOARD_REQUEST
  };
}
export function addBoardFailure(error) {
  return {
    type: ADD_BOARD_FAILURE,
    error
  };
}
export function addBoardSuccess(data) {
  return {
    type: ADD_BOARD_SUCCESS,
    data
  };
}
