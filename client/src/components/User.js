import React, { Component } from "react";

class User extends Component {
  render() {
    if (this.props.isFetching) {
      return <p>Loading</p>;
    }
    if (!this.props.currentUser) {
      return null;
    }

    let user = this.props.currentUser;
    let boards = null;
    if (user.Boards) {
      boards = user.Boards.map(board => {
        return <div key={board.name}>{board.name}</div>;
      });
    }
    return (
      <div>
        <div>{user.username}</div>
        <div>{boards}</div>
      </div>
    );
  }
}

export default User;
