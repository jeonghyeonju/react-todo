//@flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

import ListTodo from './Components/ListTodo'
import InputTodo from './Components/InputTodo'

injectTapEventPlugin();

class App extends Component {
  state = {
    list: []
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <div className="App">
            <div className="App-intro">
              <InputTodo
                onSubmit={this._onSubmit.bind(this)} />
            </div>
            <ListTodo
              list={this.state.list}
              onDelete={this._onDelete.bind(this)}
              onToggle={this._onToggle.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  _onSubmit(value) {
    const newItem = [...this.state.list]
    newItem.push({contents: value, isDone:false})
    this.setState({list: newItem})
  }
  _onDelete(value) {
    const newItem = [...this.state.list]
    newItem.splice(value, 1)
    this.setState({list: newItem})
  }
  _onToggle(value) {
    const newItem = [...this.state.list]
    newItem[value].isDone = !newItem[value].isDone;
    this.setState({list: newItem})
  }
}

export default App;
