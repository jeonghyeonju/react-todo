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
          style={{width: '100%'}}
          hintText="your TODO"
          floatingLabelText="input your todo item."
          type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)} />
        <div style={{textAlign: 'right'}}>
        <FlatButton
          style={{fontSize: 14}}
          backgroundColor="#EFEFEF"
          type="submit">Add</FlatButton>

        </div>
      </form>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
