//@flow

import React, { Component } from 'react';

export default class ListTodo extends Component {
  render() {
    const {onDelete} = this.props;
    return (
      <ul>
        {(() => this.props.list.map((it, i) => (
          <li key={i}> {it}
            <button onClick={() => onDelete(i)}>x</button>
          </li>
        )))()}
      </ul>
    )
  }
}
