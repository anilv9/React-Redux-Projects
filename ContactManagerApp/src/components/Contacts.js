import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../context";

class Contacts extends Component {
  // deleteContact = (id) => {
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts
  //   })
  //   console.log(newContacts)
  // }

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map((contact) => (
                // <h1>{contact.name}</h1>
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
