import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateGreeting, updateName } from './actions';

export default class Controls extends Component{

  constructor(props){
    super(props);
    this.state={
      greeting: '', name: '',
      ...props
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.updateGreeting()
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='greeting'>
            Greeting: <input placeholder='greeting' onChange={this.handleChange}/>
          </label>
          <label htmlFor='name'>
            Name:<input placeholder='name' onChange={this.handleChange}/>
          </label>
        </form>
      </div>
    )
  }
}

connect(
  null,
  {updateGreeting, updateName}
)(Controls);