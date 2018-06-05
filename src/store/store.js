import { createStore } from 'redux';
import postitsReducer from '../reducers/postit_reducer.js';

const store = createStore(postitsReducer);

export default store;
