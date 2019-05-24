import React from 'react';
import Login from './components/login';
import Banner from './components/Banner'
import NewUserForm from './components/NewUserForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
// import CocktailsContainer from './containers/cocktailsContainer'
// import DrinkNameForm from './components/drinkNameForm'
// import DrinkIngredientForm from './components/drinkIngredientForm'

const nameURL = "http://localhost:3000/api/v1/searchbyname?searchTerm="
const ingredientURL = "http://localhost:3000/api/v1/searchbyingredient?searchTerm="
const USER_URL = "http://localhost:3000/api/v1/users"
const LOGIN_URL = "http://localhost:3000/api/v1/login"

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      current_user: {},
      cocktails: [],
      error: ""
    }

    this.createNewUser = this.createNewUser.bind(this)
    this.attemptLogin = this.attemptLogin.bind(this)
    this.setActiveUser = this.setActiveUser.bind(this)
    this.logout = this.logout.bind(this)
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
      localStorage.token = data.jwt
    }
  }

  logout(){
    this.setState({
      current_user: {}
    })
    delete localStorage.token
  }

  getDrinksName = (event) => {
    let searchedDrink = event.target.elements['searchTerm'].value
    fetch(nameURL + searchedDrink)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          cocktails: data
        })
      })
  }

  getDrinksIngredient = (event) => {
    let searchedDrink = event.target.elements['searchTerm'].value
    fetch(ingredientURL + searchedDrink)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          cocktails: data
        })
      })
  }

  render(){
    return (
      <div className="App">

        <Router>
          <Route path='/' render={() => <Banner current_user={this.state.current_user}
                                                error={this.state.error}
                                                logout={this.logout}/>}/>
          <Route exact path="/login" render={() => <Login attemptLogin={this.attemptLogin}/>}/>
          <Route exact path="/user_signup" render={() => <NewUserForm createNewUser={this.createNewUser}/>}/>
        </Router>
        {/* <div className="App">
          <div className="cocktailsContainer">
          <CocktailsContainer cocktails={this.state.cocktails} />
          </div>
          <h1 className="title">Welcome to Mixxy!</h1>
          <div className="forms">
          <DrinkNameForm getDrinksName={this.getDrinksName}/>

          <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
          <br/>
          </div>
        </div> */}
      </div>
    );
  }

}

export default App;


// "http://www.recipepuppy.com/api/?i=#{user_ingredient}"
//
// ?s=margarita
