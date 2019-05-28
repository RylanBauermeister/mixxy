import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Banner extends Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  userIsLoggedIn(){
    return this.props.current_user.username
  }


  render(){
    return <div className="ui attached top">

      <div className="ui inverted pointing menu">
        <a href={null} className="active item">
          Home
        </a>
        <a href={null} className="item">
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
          { this.userIsLoggedIn() && <div className="item">Welcome, {this.props.current_user.username}</div>}
          {this.userIsLoggedIn() && <div className="item"><div onClick={this.props.logout} className="ui button">Log Out</div></div>}
        </div>
      </div>
      {this.props.error !== "" && <div className="error-message">Invalid Username/Password Combination</div>}
    </div>;
  }
}
