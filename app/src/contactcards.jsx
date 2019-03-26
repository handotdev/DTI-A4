import React, { Component } from 'react';
import ContactCard from './one-card';

export default class ContactCards extends Component {
  render() {

    const data = this.props.data;

    return (

      <div className="ContactCard">
        <h1>Functional Contact Cards</h1>
        {data.map(contact => <ContactCard key={contact.email} name={contact.name} email={contact.email} />)}
      </div>
    );
  }
}
