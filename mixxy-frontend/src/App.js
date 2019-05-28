import React from 'react';
import Login from './components/login';
import Banner from './components/Banner'
import NewUserForm from './components/NewUserForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import Dashboard from './containers/Dashboard'
import EditUserContainer from './containers/EditUserContainer'
import './App.css';
import UserDrinks from './containers/userDrinks'

const USER_URL = "http://localhost:3000/api/v1/users"
const LOGIN_URL = "http://localhost:3000/api/v1/login"

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      current_user: {},
      error: "",
      userDrinks: {},
      hasClickedMyDrinks: false
    }

    this.createNewUser = this.createNewUser.bind(this)
    this.attemptLogin = this.attemptLogin.bind(this)
    this.setActiveUser = this.setActiveUser.bind(this)
    this.logout = this.logout.bind(this)
    this.displayUserDrinks();
  }


  createNewUser(user){
    fetch(USER_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(this.setActiveUser)
  }

  attemptLogin(user){
    fetch(LOGIN_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({user})
    })
    .then(res => res.json())
    .then(this.setActiveUser)
  }

  setActiveUser(data){
    if(data.message){
      this.setState({error: data.message})
    } else {
      this.setState({
        current_user: data.user,
        error: ""
      })
      if(data.jwt){localStorage.token = data.jwt}

      this.props.history.push('/dashboard')
    }
  }

  logout(){
    this.setState({
      current_user: {}
    })
    delete localStorage.token
    this.props.history.push('/login')
  }

  displayUserDrinks = () => {
    if(!localStorage.token){return}
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        'Authorization': "Bearer " + localStorage.token
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({
        userDrinks: data.user.drinks,
        hasClickedMyDrinks: true
      })
      console.log(data)
      this.setActiveUser(data)
    })
  }

  renderUserDrinks = () => {
    const {userDrinks} = this.state
    if(this.state.hasClickedMyDrinks === true) {
      return <UserDrinks userDrinks={userDrinks}/>
    }
  }

  render(){

    return (
      <div className="App">
        <Route path='/' render={() => <Banner current_user={this.state.current_user}
                                              error={this.state.error}
                                              logout={this.logout}
                                              displayUserDrinks={this.displayUserDrinks}
                                              />}/>
        <main className="main">
          <Route exact path="/login" render={() => <Login attemptLogin={this.attemptLogin}/>}/>
          <Route exact path="/user_signup" render={() => <NewUserForm createNewUser={this.createNewUser}/>}/>
          {this.renderUserDrinks()}
          <Route exact path="/dashboard" render={() =>  <Dashboard />} />
          <Route exact path="/update_profile" render={() => <EditUserContainer current_user={this.state.current_user}/>} />
        </main>
      </div>
    );
  }

}

export default withRouter(App);
