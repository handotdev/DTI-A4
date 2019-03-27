import React, { Component } from 'react';
import Emoji from './one-emoji'

var emoji = require('node-emoji');

class EmojiSearch extends Component {

  state = {
    search : '',
    empty : true
  };

  updateInput(event){
    this.setState({search : event.target.value}, () => {
      if (this.state.search.length === 0){
        this.setState({empty : true});
      } else {
        this.setState({empty : false})
      }
    })
  }

  search(){
    if (this.state.empty){
      return [];
    }
    else {
      if(emoji.search(this.state.search).length === 0){
        return [{key: "Invalid search", emoji: ""}];
      } else {
        return emoji.search(this.state.search);
      }
    }
  }

  render() {

    return (
      <div className="emoji">
        <h1>Emoji Search Component</h1>
        <input type="text" placeholder="Search Emoji" value={this.state.search} onChange={event => this.updateInput(event)}/>
        {this.search().map(emoji => <Emoji key={emoji.key} name={emoji.key} emoji={emoji.emoji} />)}
        </div>
    );
  }
}

export default EmojiSearch;
