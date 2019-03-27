import React, { Component } from 'react';

export default class EmojiResult extends Component {
  render() {
    const name = this.props.name;
    const emoji = this.props.emoji;

    return (

      <div className="ContactCard">
        <p>
          {name + " " + emoji}
        </p>
      </div>
    );
  }
}
