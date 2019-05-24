import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Banner extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  userIsLoggedIn(){
    console.log(this.props.current_user.username)
    return this.props.current_user.username
  }


  render(){
    return <div>

      <div className="ui secondary pointing menu">
        <a className="active item">
          Home
        </a>
        <a className="item">
          My Drinks
        </a>
        <div className="right menu">
          {!this.userIsLoggedIn() && <><div className="item">
            <Link to='/user_signup'><div className="ui primary button">Sign up</div></Link>
          </div>
          <div className="item">
            <Link to="/login"><div className="ui button">Log-in</div></Link>
          </div></>
          }
          {
            this.userIsLoggedIn() && <a className="item">Welcome, {this.props.current_user.username}</a>
          }
        </div>
      </div>
      {this.props.error !== "" && <div className="error-message">Invalid Username/Password Combination</div>}
    </div>;
  }
}
