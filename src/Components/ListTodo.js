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
    edit: false,
    editIndex: -1
  }
  rightIconMenu(it, i) {
    const {onDelete} = this.props;
    return (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem onClick={this._onEditshow.bind(this, i)}>Edit</MenuItem>
        <MenuItem onClick={() => onDelete(it)}>Delete</MenuItem>
      </IconMenu>
    )
  }
  render() {
    const {onToggle, onEdit} = this.props;
    return (
      <List>
        {(() => this.props.list.map((it, i) => (
          <ListItem id={i}
            key={i}
            leftCheckbox={<Checkbox checked={it.isDone} onCheck={() => onToggle(it)} />}
            rightIconButton={ this.rightIconMenu(it, i) }>
            {
              !this.state.edit || this.state.editIndex !== i ? (<span
                className={ it.isDone ? 'contents-is-done' : 'contents-default' }>{it.contents}</span>) : null
            }{
              this.state.edit && this.state.editIndex === i ? (
                <form onSubmit={(e) => {
                    e.preventDefault()
                    this.setState({edit: false, todovalue: ''})
                    onEdit(it, this.state.todovalue)
                  }}>
                  <TextField onBlur={ () => {
                      this.setState({edit: false, todovalue: ''})
                      onEdit(i, this.state.todovalue)
                    }}
                    style={{width: '100%'}}
                    hintText={it.contents}
                    floatingLabelText={it.contents}
                    type="text" value={this.state.todovalue} onChange={this._onChange.bind(this)} />
                </form>
              ): null
             }
          </ListItem>
        )))()}
      </List>
    )
  }
  _onEditshow(i){
    this.setState({edit: true, editIndex:i})
  }
  _onChange(event){
    this.setState({todovalue: event.target.value})
    event.preventDefault();
  }
}
