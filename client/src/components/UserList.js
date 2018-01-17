import React, { Component } from "react";

const mapUsers = users => {
  if (!users.length) {
    return null;
  }
  return users.map(user => {
    return <div key={user.username}>{user.username}</div>;
  });
};

const fetchingMessage = isFetching => {
  if (!isFetching) {
    return null;
  }
  return <div>Loading</div>;
};

class UserList extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    let isFetching = fetchingMessage(this.props.isFetching);

    let userList = mapUsers(this.props.users);
    return (
      <div>
        {isFetching}
        <div>{userList}</div>
      </div>
    );
  }
}

export default UserList;
