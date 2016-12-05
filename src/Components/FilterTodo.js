import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

export default class FilterTodo extends Component {
  render(){
    return(
      <div style={{textAlign: 'center'}}>
        <RaisedButton label="ALL" onClick={()=>{this.props.onFilter('all')}}/>
        <RaisedButton label="TODO" onClick={()=>{this.props.onFilter('todo')}}/>
        <RaisedButton label="DONE" onClick={()=>{this.props.onFilter('done')}}/>
      </div>
    )
  }
}
