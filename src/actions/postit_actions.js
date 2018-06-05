export const RECEIVE_POSTITS = 'RECEIVE_POSTITS';
export const RECEIVE_POSTIT = 'RECEIVE_POSTIT';
export const REMOVE_POSTIT = 'REMOVE_POSTIT';

export const receivePostits = (postits) => ({
  type: RECEIVE_POSTITS,
  postits
});

export const receivePostit = (postit) => ({
  type: RECEIVE_POSTIT,
  postit
});

export const removePostit = (postit) => ({
  type: REMOVE_POSTIT,
  postit
});
