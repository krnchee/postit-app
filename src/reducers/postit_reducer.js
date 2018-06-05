import { RECEIVE_POSTITS, RECEIVE_POSTIT, REMOVE_POSTIT} from '../actions/postit_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'sf',
    body: 'embarcaderro',
    color: 'blue'
  },
  2: {
    id: 2,
    title: 'ny',
    body: 'empire state building',
    color: 'red'
  },
};


const postitsReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_POSTITS:
      return action.postits;
    case RECEIVE_POSTIT:
      const newPostit = {[action.postit.id]: action.postit};
      return merge({}, state, newPostit);
    case REMOVE_POSTIT:
      let nextState = merge({}, state);
      delete nextState[action.postit.id];
      return nextState;
    default:
      return state;
  }
};

export default postitsReducer;
