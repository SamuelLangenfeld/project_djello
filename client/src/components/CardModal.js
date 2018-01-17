import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { List, ListItem } from "material-ui/List";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Modal extends React.Component {
  state = {
    open: this.props.modal
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = e => {
    this.setState({ open: false });
  };

  render() {
    let members = null;
    if (this.props.members) {
      members = this.props.members.map(member => {
        return (
          <ListItem>
            {member.username}{" "}
            <form className="deleteLink" onSubmit={this.props.removeMember}>
              <input type="submit" value="Remove this user" />
              <input type="hidden" name="userId" value={member.id} />
              <input type="hidden" name="cardId" value={this.props.id} />
              <input type="hidden" name="boardId" value={this.props.boardId} />
            </form>
          </ListItem>
        );
      });
    }

    let users = null;

    if (this.props.users) {
      users = this.props.users.map(user => (
        <option value={user.id}>{user.username}</option>
      ));
    }
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.props.unselectCard}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onClick={this.submit}
      />
    ];

    return (
      <div>
        <Dialog
          title={this.props.label}
          actions={actions}
          modal={true}
          open={this.props.modal}
          autoScrollBodyContent={true}
        >
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                ref={input => (this.title = input)}
                defaultValue={this.props.title}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                name="description"
                defaultValue={this.props.description}
                ref={input => (this.description = input)}
              />
            </div>
          </form>
          <h2>Members</h2>
          <List>{members}</List>
          <RaisedButton label="Add Members" />
          <form onSubmit={this.props.addMember}>
            <select name="userId">{users}</select>
            <input type="hidden" name="cardId" value={this.props.id} />
            <input type="submit" />
          </form>
        </Dialog>
      </div>
    );
  }
}
