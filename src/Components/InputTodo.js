//@flow

import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    todovalue : ''
  }

  render() {
    return (
      <form onSubmit={(e) => {
          e.preventDefault()
          this.setState({todovalue: ''});
          this.props.onSubmit(this.state.todovalue)
        }}>
        <input type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)}/>
        <button type="submit">테스트1</button>
      </form>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
