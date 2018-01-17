import React, { Component } from "react";
import UserContainer from "../containers/UserContainer";
import BoardContainer from "../containers/BoardContainer";
import BoardModal from "./BoardModal";

class Home extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getUsers();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentUser && !nextProps.currentBoard) {
      this.props.getBoard(nextProps.currentUser.id);
    }
  }

  render() {
    let boards = null;
    if (this.props.boards) {
      boards = this.props.boards.map(board => {
        if (
          !(this.props.currentBoard && this.props.currentBoard.id == board.id)
        ) {
          return <option value={board.id}>{board.name}</option>;
        }
      });
      if (this.props.currentBoard) {
        boards.unshift(
          <option value={this.props.currentBoard.id}>
            {this.props.currentBoard.name}
          </option>
        );
      }
    }

    let userId = null;
    if (this.props.currentUser) {
      userId = this.props.currentUser.id;
    }
    return (
      <div>
        <select onChange={this.props.selectBoard}>{boards}</select>
        <BoardModal submitHandler={this.props.addBoard} userId={userId} />
        <BoardContainer />
        <UserContainer />
      </div>
    );
  }
}

export default Home;
