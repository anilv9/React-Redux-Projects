import React, { Component } from "react";
import PropTypes from "prop-types";
// import './contact.css'
import { Consumer } from "../../context";

class Contact extends Component {
  state = {
    showContactInfo: false,
  };
  // this.onShowClick = this.onShowClick.bind(this);

  // onShowClick = e => {
  //   this.setState({
  //     showContactInfo: !this.state.showContactInfo
  //   })
  // }
  onDeleteClick = (id, dispatch) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  render() {
    const { id, name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;

    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {name}
                <i
                  onClick={() =>
                    this.setState({
                      showContactInfo: !this.state.showContactInfo,
                    })
                  }
                  className="fas fa-sort-down"
                  style={{
                    cursor: "pointer",
                    marginLeft: "5px",
                    marginTop: "0",
                  }}
                ></i>
                <i
                  className="fas fa-times"
                  style={{ cursor: "pointer", float: "right", color: "red" }}
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
                ></i>
              </h4>
              {showContactInfo ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
