//@flow

export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const TODO_TODO = 'DELETE_TODO'
export const COMPLETE_TODO = 'DELETE_TODO'
export const FILTER_TODO = 'DELETE_TODO'
export const LIST_TODO = 'LIST_TODO'

export function list(){
  return {
    type: LIST_TODO
  }
}

export function add(text){
  return {
    type: ADD_TODO,
    text
  }
}

export function deleteTodo(obj){
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
