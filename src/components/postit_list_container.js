import { connect } from 'react-redux';
import React from 'react';
import PostitList from './postit_list';
import {receivePostits, receivePostit, removePostit} from '../actions/postit_actions';
import { allPostits } from '../reducers/selectors';


const mapStateToProps = state => {
  return {
  postits: allPostits(state)
}};

const mapDispatchToProps = dispatch => ({
  receivePostit: postit => dispatch(receivePostit(postit)),
  removePostit: postit => dispatch(removePostit(postit))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostitList);
