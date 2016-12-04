//@flow

import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

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
        <TextField id="todoValue"
          hintText="your TODO"
          floatingLabelText="input your todo item."
          type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)} />
        <FlatButton
          style={{fontSize: 14}}
          backgroundColor="#EFEFEF"
          type="submit">Add</FlatButton>
      </form>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
