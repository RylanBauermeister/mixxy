import React, { Component } from 'react'

export default class NewUserForm extends Component {

  constructor(props){
    super(props)
    this.state = {

    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(ev){
    ev.preventDefault()
    const user = {
      username: ev.target.elements['username'].value,
      password: ev.target.elements['password'].value
    }

    this.props.createNewUser(user)
  }


  render(){
    return <form onSubmit={this.handleSubmit}>
      <input type="text" name="username" placeholder="username"/>
      <input type="password" name="password" placeholder="password"/>
      <input type="submit" value="Create User"/>
    </form>;
  }
}
