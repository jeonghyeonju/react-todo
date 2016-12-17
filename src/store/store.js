import { createStore } from 'redux';
import todoApp from '../reducers';

let store = createStore(todoApp);

import { add, delete, edit, complete, todo, filter } from '../actions';

let unsubscribe = store.subscribe(()=>
  console.log(store.getState())
);

store.dispatch(add('Learn about action'));
store.dispatch(add('Learn about reducers'));
store.dispatch(add('Learn about reducers'));

unsubscribe();
