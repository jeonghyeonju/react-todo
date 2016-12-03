import React, { Component } from 'react';

export default class InputTodo extends Component {
  state = {
    todovalue : ''
  }
  render() {
    console.log('Input Todo render')
    return (
      <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            this.setState({todovalue: ''});
            this.props.onSubmit(this.state.todovalue)
          }}>
          <input type="text" value={this.state.todovalue} onChange={(ev)=>this._onChange(ev)}/>
          <button type="button" onClick={ ()=> this.props.onSubmit(this.state.todovalue)}>테스트1</button>
        </form>
      </div>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
