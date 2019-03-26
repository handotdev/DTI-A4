import React, { Component } from 'react';
import Emoji from './one-emoji'

var emoji = require('node-emoji');

class EmojiSearch extends Component {
  constructor(props){
  super(props);

  this.state = {
    search : ''
  };
  }

  updateInput(event){
    this.setState({search : event.target.value})
  }

  render() {

    return (
      <div className="emoji">
        <input type="text" placeholder="Search Emoji" value={this.state.search} onChange={event => this.updateInput(event)}/>
        {emoji.search(this.state.search).map(emoji => <Emoji key={emoji.key} name={emoji.key} emoji={emoji.emoji} />)}
        </div>
    );
  }
}

export default EmojiSearch;
