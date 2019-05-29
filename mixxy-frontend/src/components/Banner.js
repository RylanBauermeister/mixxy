import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

class Banner extends Component {

  constructor(props){
    super(props)
    this.state = {
      active: this.props.onDrinks ? "drinks" : "main"
    }

    this.selectMain = this.selectMain.bind(this)
    this.selectDrinks = this.selectDrinks.bind(this)
  }

  userIsLoggedIn(){
    return this.props.current_user.username
  }

  static getDerivedStateFromProps(props, state){
    console.log(props)
    return {active: props.onDrinks ? "drinks" : "main"}
  }

  selectMain(ev){
    this.setState({
      active: "main"
    })
    this.props.returnMainMenu(ev)
  }

  selectDrinks(ev){
    this.setState({
      active: "drinks"
    })
    this.props.displayUserDrinks(ev)
  }

  render(){
    return <div className="ui attached top">

      <div className="ui inverted pointing menu">
        <a href={null} className={this.state.active === "main" ? 'item active' : "item"} onClick={this.selectMain}>
          Home
        </a>
        <a href={null} className={this.state.active === "drinks" ? 'item active' : "item"} onClick={this.selectDrinks}>
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
          {this.userIsLoggedIn() && <div className="item">
                                        <div onClick={() => this.props.history.push('/update_profile')} className="ui button">
                                          Settings
                                        </div>
                                    </div>}
          {this.userIsLoggedIn() && <div className="item"><div onClick={this.props.logout} className="ui primary button">Log Out</div></div>}

        </div>
      </div>
      {this.props.error !== "" && <div className="error-message">Invalid Username/Password Combination</div>}
    </div>;
  }
}

export default withRouter(Banner)
