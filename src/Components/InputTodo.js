//@flow

import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    todovalue : ''
  }
  render() {
    const {todovalue} = this.state
    return (
      <form onSubmit={(e) => {
          e.preventDefault()
          this.setState({todovalue: ''});
          if(!todovalue) return;
          this.props.onSubmit(todovalue)
        }}>
        <input type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)}/>
        <button type="submit">Add</button>
      </form>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
