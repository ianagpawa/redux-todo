import React from 'react';
import { createStore } from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import todoApp from './reducers/reducers';

import {
    addTodo,
    toggleTodo,
    setVisibilityFilter,
    VisibilityFilters
} from './actions/actions'

let store = createStore(todoApp)

// console.log(store.getState());
//
// const unsubscribe = store.subscribe(() =>
//     console.log(store.getState())
// )
//
//
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(toggleTodo(0));
// store.dispatch(toggleTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
//
// unsubscribe();
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
