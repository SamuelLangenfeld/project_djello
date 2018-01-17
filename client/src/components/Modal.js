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
      title: this.title.value,
      description: this.description.value,
      ownerId: this.props.ownerId
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
        <RaisedButton label={this.props.label} onClick={this.handleOpen} />
        <Dialog
          title={this.props.label}
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <form>
            <div className="form-group">
              <label>Title</label>
              <input
                className="form-control"
                type="text"
                name="title"
                ref={input => (this.title = input)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                className="form-control"
                type="text"
                name="description"
                ref={input => (this.description = input)}
              />
            </div>
          </form>
        </Dialog>
      </div>
    );
  }
}
