import React, { Component } from 'react';
import SecondFile from './SecondFile';

export default class NewFile extends Component {
    state={
        name: "this is pavankumar"
    }
  render() {
    return (
      <div>
          <SecondFile name={this.state.name}/>
      </div>
    )
  }
}
