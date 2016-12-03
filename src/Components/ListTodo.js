//@flow

import React, { Component } from 'react';

export default class ListTodo extends Component {
  render() {
    const {onDelete, onToggle} = this.props;
    return (
      <ul>
        {(() => this.props.list.map((it, i) => (
          <li key={i}>
            <input type="checkbox" onChange={()=>onToggle(i)}/>
            <span className={ it.isDone ? 'contents-is-done' : 'contents-default' }>{it.contents}</span>
            <button onClick={() => onDelete(i)}>x</button>
          </li>
        )))()}
      </ul>
    )
  }
}
