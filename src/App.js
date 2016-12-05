//@flow

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './App.css';

import ListTodo from './Components/ListTodo'
import InputTodo from './Components/InputTodo'

injectTapEventPlugin();
class FilterButton extends Component {
  render(){
    return(
      <div>
        <button onClick={()=>{this.props.onFilter('all')}}>ALL</button>
        <button onClick={()=>{this.props.onFilter('todo')}}>TODO</button>
        <button onClick={()=>{this.props.onFilter('done')}}>DONE</button>
      </div>
    )
  }
}

class App extends Component {
  state = {
    list: [],
    viewList: []
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
            <FilterButton />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  _onSubmit(value) {
    const newItem = [...this.state.list]
    newItem.push({contents: value, isDone:false})
    this.setState({list: newItem})
    this.setState({viewList: newItem})
  }
  _onDelete(value) {
    const newItem = [...this.state.list]
    newItem.splice(value, 1)
    this.setState({list: newItem})
    this.setState({viewList: newItem})
  }
  _onToggle(value) {
    const newItem = [...this.state.list]
    newItem[value].isDone = !newItem[value].isDone;
    this.setState({list: newItem})
    this.setState({viewList: newItem})
  }
  _onFilter(v){
    const newItem = [...this.state.list]
    switch(v){
      case 'all':
        this.setState({viewList: newItem})
        break;
      case 'todo':
        this.setState({viewList: newItem.filter((v) => !v.isDone)});
        break;
      case 'done':
        this.setState({viewList: newItem.filter((v)=>v.isDone)})
        break;
      default:
    }
  }
}

export default App;
