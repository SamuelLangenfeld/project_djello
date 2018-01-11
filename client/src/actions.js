export const GET_USERS_REQUEST = 'GET_USERS_REQUEST';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';

export function getUsersRequest() {
  return {
    type: GET_USERS_REQUEST
  };
}

export function getUsersSuccess(data) {
  return {
    type: GET_USERS_SUCCESS,
    data
  };
}

export function getUsersFailure(error) {
  return {
    type: GET_USERS_FAILURE,
    error
  };
}

export function getUsers(formData) {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getUsersRequest());

    let { search, type } = formData;

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
        // Dispatch success which sets the Books.
        console.log(json);
        dispatch(getUsersSuccess(json));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getUsersFailure(error));
      });
  };
}
