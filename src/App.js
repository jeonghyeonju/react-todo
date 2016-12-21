//@flow

import React, { Component } from 'react';
import { createStore } from 'redux';
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { add } from './actions/input';
import './App.css';

import todoApp from './reducers/todoApp';
import ListTodo from './Components/ListTodo'
import InputTodo from './Components/InputTodo'
import FilterTodo from './Components/FilterTodo'

injectTapEventPlugin();


const mapStoreToProp = (store)=>{
  return store;
}

const mapDispatchToPops = (dispatch)=>{
  return {dispatch};
}

class App extends Component {
  list = [];
  state = {
    viewList: [],
    filter: 'all'
  }
  componentWillReceiveProps(props){
    this._onSubmit(props.todos.text);
  }
  render() {
    console.log(this.props)
    const { dispatch } = this.props;
    return (
      <MuiThemeProvider>
        <div>
          <AppBar />
          <div className="App">
            <div className="App-intro">
              <InputTodo
                onSubmit={(value) => {dispatch(add(value))}} />
            </div>
            <ListTodo
              list={this.state.viewList}
              onEdit={this._onEdit.bind(this)}
              onDelete={this._onDelete.bind(this)}
              onToggle={this._onToggle.bind(this)}/>

            <FilterTodo
              onFilter={this._onFilter.bind(this)}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

  _onSubmit(value) {
    this.list.push({contents: value, isDone:false})
    this._onFilter(this.state.filter);
  }
  _onEdit(value, newValue){
    this.list[this.list.indexOf(value)].contents = newValue;
    this._onFilter(this.state.filter);
  }
  _onDelete(value) {
    this.list.splice(this.list.indexOf(value), 1)
    this._onFilter(this.state.filter);
  }
  _onToggle(value) {
    const index = this.list.indexOf(value);
    this.list[index].isDone = !this.list[index].isDone;
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

export default connect(mapStoreToProp, mapDispatchToPops)(App);
