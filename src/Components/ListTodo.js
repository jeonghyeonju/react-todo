//@flow

import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import FlatButton from 'material-ui/FlatButton';

export default class ListTodo extends Component {
  render() {
    const {onDelete, onToggle} = this.props;
    return (
      <List>
        {(() => this.props.list.map((it, i) => (
          <ListItem
            key={i}
            leftCheckbox={<Checkbox onCheck={() => onToggle(i)} />}
            rightIconButton={<FlatButton style={{right: '0px'}} onClick={() => onDelete(i)}>&times;</FlatButton>}>
            <span className={ it.isDone ? 'contents-is-done' : 'contents-default' }>{it.contents}</span>
          </ListItem>
        )))()}
      </List>
    )
  }
}
