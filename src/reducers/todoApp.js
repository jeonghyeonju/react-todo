//@flow

import { combineReducers } from 'redux';
import { ADD_TODO, EDIT_TODO, COMPLETE_TODO }  from '../actions/input';

function todos (state=[], action){
  console.log(action)
  switch(action.type){
    case ADD_TODO:
      return [...state,{text:action.text, isDone: false}]
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
