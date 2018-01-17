import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class Modal extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  submit = e => {
    this.props.submitHandler({
      name: this.title.value,
      userId: this.userId.value
    });
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onClick={this.submit}
      />
    ];

    return (
      <div>
        <RaisedButton label="New Board" onClick={this.handleOpen} />
        <Dialog
          title="Create a New Board"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                name="title"
                ref={input => (this.title = input)}
              />
              <input
                type="hidden"
                name="userId"
                value={this.props.userId}
                ref={input => (this.userId = input)}
              />
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}
