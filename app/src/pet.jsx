import React, { Component } from 'react';
import Picture from './pet.png'

export default class Pet extends Component {
  render(){

    return (
      <img src={Picture} alt="Pet" />
    );
  }
}
