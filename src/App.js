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
  list = [];
  state = {
    viewList: [],
    filter: 'all'
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
              list={this.state.viewList}
              onDelete={this._onDelete.bind(this)}
              onToggle={this._onToggle.bind(this)}/>
            <FilterButton onFilter={this._onFilter.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  _onSubmit(value) {
    this.list.push({contents: value, isDone:false})
    this._onFilter(this.state.filter);
  }
  _onDelete(value) {
    this.list.splice(this.list.indexOf(value), 1)
    this._onFilter(this.state.filter);
  }
  _onToggle(value) {
    this.list[value].isDone = !this.list[value].isDone;
    this._onFilter(this.state.filter);
  }
  _onFilter(v){
    const newItem = [...this.list]
    switch(v){
      case 'all':
        this.setState({viewList: newItem, filter: 'all'})
        break;
      case 'todo':
        this.setState({viewList: newItem.filter((v) => !v.isDone), filter: 'todo'});
        this.setState({filter: 'todo'})
        break;
      case 'done':
        this.setState({viewList: newItem.filter((v)=>v.isDone), filter: 'done'})
        break;
      default:
    }
  }
}

export default App;
