import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListTodo extends Component {
  render() {
    console.log('list todo Component')
    return (
      <div>
        <ul>
          {(() => { return this.props.list.map((it, i) => {
            return <li key={i}>{it} <button onClick={()=>this.props.onDelete(i)}>x</button></li>
          })
        })()}
      </ul>
      </div>
    )
  }
}

class InputTodo extends Component {
  state = {
    todovalue : ''
  }
  render() {
    console.log('Input Todo render')
    return (
      <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            this.props.onSubmit(this.state.todovalue)
            this.setState({todovalue: ''});
          }}>
          <input type="text" value={this.state.todovalue} onChange={(ev)=>this._onChange(ev)}/>
          <button type="submit">테스트1</button>
        </form>
      </div>
    )
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
class App extends Component {
  var1 = 'test1'
  state = {
    list: []
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <InputTodo
            onSubmit={this._onSubmit.bind(this)} />
        </div>
        <ListTodo
          list={this.state.list}
          onDelete={this._onDelete.bind(this)}/>
      </div>
    );
  }
  _onSubmit(value) {
    if(!value)return
    const newItem = [...this.state.list]
    newItem.push(value)
    this.setState({list: newItem})
  }
  _onDelete(value) {
    if(!value)return
    const newItem = [...this.state.list]
    newItem.splice(value, 1)
    this.setState({list: newItem})
  }
}

export default App;
