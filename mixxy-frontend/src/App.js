import React from 'react';
import Login from './components/login';
import Banner from './components/Banner'
import NewUserForm from './components/NewUserForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {withRouter} from 'react-router';
import Dashboard from './containers/Dashboard'
import EditUserContainer from './containers/EditUserContainer'
import './App.css';

const USER_URL = "http://localhost:3000/api/v1/users"
const LOGIN_URL = "http://localhost:3000/api/v1/login"

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      current_user: {},
      error: ""
    }

    this.createNewUser = this.createNewUser.bind(this)
    this.attemptLogin = this.attemptLogin.bind(this)
    this.setActiveUser = this.setActiveUser.bind(this)
    this.logout = this.logout.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.renewState();
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
    .then(data => {
      this.setActiveUser(data)
      this.props.history.push('/dashboard')
    })
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
    .then(data => {
      this.setActiveUser(data)
      if(!data.message){
        this.props.history.push('/dashboard')
      }
    })
  }

  setActiveUser(data, mode="hard"){
    if(data.message && mode === "soft"){
      return
    } else if(data.message){
      this.setState({error: data.message})
    } else {
      this.setState({
        current_user: data.user,
        error: ""
      })
      if(data.jwt){localStorage.token = data.jwt}
    }
  }

  logout(){
    this.setState({
      current_user: {}
    })
    delete localStorage.token
    this.props.history.push('/login')
  }

  renewState(){
    if(!localStorage.token){return}
    fetch("http://localhost:3000/api/v1/profile", {
      method: "GET",
      headers: {
        'Authorization': "Bearer " + localStorage.token,
      }
    })
    .then(res => res.json())
    .then(data => {this.setActiveUser(data, "soft")})
  }

  updateUser(user){
    fetch(USER_URL + `/${user.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + localStorage.token,
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user
      })
    })
    .then(res => res.json())
    .then(data => {
      this.setActiveUser(data)
      this.props.history.push('/dashboard')
    })
  }

  deleteUser(id){
    fetch(USER_URL + `/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': "Bearer " + localStorage.token
      }
    })
    .then( () => this.logout())
  }

  render(){
    return (
      <div className="App">
        <Route path='/' render={() => <Banner current_user={this.state.current_user}
                                              error={this.state.error}
                                              logout={this.logout}/>}/>
        <main className="main">
          <Route exact path="/login" render={() => <Login attemptLogin={this.attemptLogin}/>}/>
          <Route exact path="/user_signup" render={() => <NewUserForm createNewUser={this.createNewUser}/>}/>
          <Route exact path="/dashboard" render={() =>  <Dashboard />} />
          <Route exact path="/update_profile" render={() => <EditUserContainer current_user={this.state.current_user}
                                                                               updateUser={this.updateUser}
                                                                               deleteUser={this.deleteUser}/>} />
        </main>

      </div>
    );
  }

}

export default withRouter(App);
