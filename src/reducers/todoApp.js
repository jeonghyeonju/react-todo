//@flow

import { combineReducers } from 'redux';
import { ADD_TODO ,LIST_TODO, EDIT_TODO, COMPLETE_TODO }  from '../actions/input';

const initial_state = {
  list: [
    {contents: 'aaa', isDone:false},
    {contents: 'bbb', isDone:false},
  ],
};

function todos (state=initial_state, action){
  console.log(action)
  switch(action.type){
    case LIST_TODO:
      return [...state.list]
    case ADD_TODO:
      return  { text : action.text };
    case EDIT_TODO:
      return [...state,{text:action.text}]
    case COMPLETE_TODO:
      return state.map((todo, index)=>{
        if(index === action.index){
          return Object.assign({}, todo, {
            isDone: !todo.isDone
          })
        }
        return todo;
      })
    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
