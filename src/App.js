import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ListTodo extends Component {
  render() {
    console.log('list todo Component')
    return (
      <div>
        {(() => {
         return this.props.list.map((it, i) => {
           return <div key={i}>{it}</div>
         })
       })()}
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
        <input type="text" value={this.state.todovalue} onChange={(ev)=>this._onChange(ev)}/>
        <button type="button" onClick={()=>this.props.onSubmit(this.state.todovalue)}>테스트1</button>
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
        <ListTodo list={this.state.list}/>
      </div>
    );
  }
  _onSubmit(value) {
    console.log(value)
    this.state.list.push(value) //복사해서 써야한다
    this.setState({list: this.state.list})
  }
}

export default App;
