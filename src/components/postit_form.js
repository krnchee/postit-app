import React, {Component} from 'react';
import { uniqueId } from '../reducers/id_generator';

class PostitForm extends Component {

  constructor(props){
    super(props);

    this.state = {title:'', body:'', color:''};
    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(event) {
    event.preventDefault();
    const postit = Object.assign({}, {id: uniqueId()}, this.state);
    this.setState({
      title: '',
      body: '',
      color: ''
    });
    this.props.receivePostit(postit);
  }

  onInputChange(property) {
    return event => this.setState({[property]: event.target.value})
  }


  render() {
    return(
      <div className="col-md-4 col-md-offset-4 text-center center">
        <form onSubmit={this.onFormSubmit}>
          <div class="form-group">
            <input
              placeholder = 'Untitled'
              value={this.state.title}
              onChange={this.onInputChange('title')}
            />
          </div>
          <div class="form-group">
            <textarea
              placeholder = 'Just start typing here'
              value={this.state.body}
              onChange={this.onInputChange('body')}
            />
          </div>
          <button type='submit' className='btn btn-primary'>Add</button>
        </form>
      </div>
    );
  }
};

export default PostitForm;
