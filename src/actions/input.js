const ADD_TODO = 'ADD_TODO'
const EDIT_TODO = 'EDIT_TODO'
const DELETE_TODO = 'DELETE_TODO'

const TODO_TODO = 'DELETE_TODO'
const COMPLETE_TODO = 'DELETE_TODO'
const FILTER_TODO = 'DELETE_TODO'
export function add(text){
  return {
    type: ADD_TODO,
    text
  }
}

export function delete(obj){
  return {
    type: DELETE_TODO,
    obj
  }
}

export function edit(obj, newText){
  return {
    type: EDIT_TODO,
    obj,
    newText
  }
}

export function complete(obj){
  return {
    type: COMPLETE_TODO,
    obj
  }
}

export function todo(obj){
  return {
    type: TODO_TODO,
    obj
  }
}

export function filter(text){
  return {
    type: FILTER_TODO,
    text
  }
}
