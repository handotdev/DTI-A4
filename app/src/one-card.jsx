import React, { Component } from 'react';

export default class ContactCard extends Component {
  render() {
    const name = this.props.name;
    const email = this.props.email;

    return (

      <div className="ContactCard">
        <h2>
          {name}
        </h2>
        <p>
          {email}
        </p>
      </div>
    );
  }
}
