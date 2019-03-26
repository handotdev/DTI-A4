import React, { Component } from 'react';
import DoggoTranslator from 'doggotranslator';

let doggoTranslator = new DoggoTranslator('en');

export default class DoggoTranslate extends Component {
  constructor(props){
  super(props);

  this.state = {
    text : ''
  };
  }

  updateInput(event){
    this.setState({text : event.target.value})
  }

  render() {

    return (
      <div className="doggo">
        <input type="text" placeholder="Translate to Doggo" value={this.state.text} onChange={event => this.updateInput(event)}/>
        <button onClick={event => this.updateInput(event)}>Translate</button>
        <p>{doggoTranslator.translateSentence(this.state.text, false)}</p>
      </div>
    );
  }
}
