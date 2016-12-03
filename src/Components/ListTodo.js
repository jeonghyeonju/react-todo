import React, { Component } from 'react';

export default class ListTodo extends Component {
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
