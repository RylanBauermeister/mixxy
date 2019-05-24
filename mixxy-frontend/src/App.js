import React from 'react';
import Login from './components/login';
import Banner from './components/Banner'
import NewUserForm from './components/NewUserForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

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
    console.log("doing this")
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
      localStorage.token = data.jwt
    }

  }

  render(){
    return (
      <div className="App">

        <Router>
          <Route path='/' render={() => <Banner current_user={this.state.current_user} error={this.state.error}/>}/>
          <Route exact path="/login" render={() => <Login attemptLogin={this.attemptLogin}/>}/>
          <Route exact path="/user_signup" render={() => <NewUserForm createNewUser={this.attemptLogin}/>}/>
        </Router>

      </div>
    );
  }

}

export default App;
