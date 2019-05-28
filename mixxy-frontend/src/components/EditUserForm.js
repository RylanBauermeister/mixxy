import React, { Component } from 'react'

export default class EditUserForm extends Component {

  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return <div className="user-form">
            <h2 className="title subtitle">Update Your Account</h2>
            <form className="ui center form user-info-form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label>Username</label>
                  <input type="text" name="username" defaultValue={this.props.current_user.username} placeholder="username"/>
                </div>
                <div className="field">
                  <label>Old Password</label>
                  <input type="password" name="password" placeholder="password"/>
                </div>
                <div className="field">
                  <label>New Password</label>
                  <input type="password" name="password" placeholder="password"/>
                </div>
              <input className="ui submit button" type="submit" value="Update Account"/>
            </form>
          </div>
  }
}
