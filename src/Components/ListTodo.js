//@flow

import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {grey400} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';

const iconButtonElement = (
  <IconButton touch={true} >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

export default class ListTodo extends Component {
  rightIconMenu(it) {
    const {onDelete} = this.props;
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Edit</MenuItem>
        <MenuItem onClick={() => onDelete(it)}>Delete</MenuItem>
      </IconMenu>
    )
  }
  render() {
    const {onDelete, onToggle} = this.props;
    return (
      <List>
        {(() => this.props.list.map((it, i) => (
          <ListItem
            key={i}
            leftCheckbox={<Checkbox checked={it.isDone} onCheck={() => onToggle(i)} />}
            rightIconButton={ this.rightIconMenu(it) }>
            <span className={ it.isDone ? 'contents-is-done' : 'contents-default' }>{it.contents}</span>
          </ListItem>
        )))()}
      </List>
    )
  }
}
