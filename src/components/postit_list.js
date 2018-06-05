import React, {Component} from 'react';
import PostitListItem from './postit_list_item';
import PostitForm from './postit_form';

class PostitList extends Component {

  render() {
    const postitItems = this.props.postits.map(postit => <PostitListItem postitProps={postit} removePostit={this.props.removePostit} receivePostit={this.props.receivePostit} />)
    return(
      <div className='container'>
        <div className='row'>
        <ul>
          {postitItems}
        </ul>
        <PostitForm receivePostit={this.props.receivePostit}/>
        </div>
      </div>
    )
  }
}

export default PostitList;
