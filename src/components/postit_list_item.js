import React, {Component} from 'react';
import merge from 'lodash/merge';

class PostitListItem extends Component {

  constructor(props) {
    super(props);

    this.deletePostit = this.deletePostit.bind(this);
  }

  deletePostit(event) {
    event.preventDefault();
    console.log('delete')
    this.props.removePostit(this.props.postitProps)
  }


  render() {
    const postit = this.props.postitProps;
    return(
      <div className='col-xs-6 postit'>
        <h3>{postit.title}</h3>
        <p>{postit.body}</p>
        <button className='btn btn-danger pull-xs-right'
         onClick={this.deletePostit}>Delete</button>
      </div>
    )
  }
};

export default PostitListItem;
