//@flow

import { combineReducers } from 'redux';

function todos (state, action){
  return state || 'all';
}

const todoApp = combineReducers({
  todos
})

export default todoApp
