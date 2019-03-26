import React, { Component } from 'react';
import DoggoTranslator from 'doggotranslator';

let doggoTranslator = new DoggoTranslator('en');

export default class DoggoTranslate extends Component {
  constructor(props){
  super(props);

  this.state = {
    text : '',
    translated : ''
  };
  }

  updateInput(event){
    this.setState({text : event.target.value});
  }

  translate(event){
    this.setState({translated : doggoTranslator.translateSentence(this.state.text, false)});
  }

  render() {

    return (
      <div className="doggo">
        <h1>Doggo Translate</h1>
        <input type="text" placeholder="Translate to Doggo" value={this.state.text} onChange={event => this.updateInput(event)}/>
        <button onClick={event => this.translate(event)}>Translate</button>
        <p>{this.state.translated}</p>
      </div>
    );
  }
}
