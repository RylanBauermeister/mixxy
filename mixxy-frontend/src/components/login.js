import React, { Component } from 'react'

export default class Login extends Component {

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

    this.props.attemptLogin(user)
  }

  render(){
    return (
      <div>
        <form className="ui form user-info-form" onSubmit={this.handleSubmit}>
          <div className="two fields">
            <div className="field">
              <label>Username</label>
              <input type="text" name="username" placeholder="username"/>
            </div>
            <div className="field">
              <label>Password</label>
              <input type="password" name="password" placeholder="password"/>
            </div>
          </div>
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}
