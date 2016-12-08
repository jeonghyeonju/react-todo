//@flow

import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import {grey400} from 'material-ui/styles/colors';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import TextField from 'material-ui/TextField';

const iconButtonElement = (
  <IconButton touch={true} >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

export default class ListTodo extends Component {
  state = {
    todovalue : '',
    edit: false
  }
  rightIconMenu(it) {
    const {onDelete} = this.props;
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={this._onEdit.bind(this)}>Edit</MenuItem>
        <MenuItem onClick={() => onDelete(it)}>Delete</MenuItem>
      </IconMenu>
    )
  }
  render() {
    const {onDelete, onToggle} = this.props;
    const {todovalue} = this.state
    return (
      <List>
        {(() => this.props.list.map((it, i) => (
          <ListItem id={i}
            key={i}
            leftCheckbox={<Checkbox checked={it.isDone} onCheck={() => onToggle(i)} />}
            rightIconButton={ this.rightIconMenu(it) }>
            {
              !this.state.edit ? (<span
                className={ it.isDone ? 'contents-is-done' : 'contents-default' }>{it.contents}</span>) : null
            }{
              this.state.edit ? ( <TextField
              style={{width: '100%'}}
              hintText={it.contents}
              floatingLabelText="edit your todo item."
              type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)} />) : null

             }
          </ListItem>
        )))()}
      </List>
    )
  }
  _onEdit(){
    console.log('1')
    this.setState({edit: true})
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
