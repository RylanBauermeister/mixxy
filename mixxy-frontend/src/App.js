import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './containers/cocktailsContainer'
import DrinkNameForm from './components/drinkNameForm'
import DrinkIngredientForm from './components/drinkIngredientForm'

const nameURL = "http://localhost:3000/api/v1/searchbyname?searchTerm="
const ingredientURL = "http://localhost:3000/api/v1/searchbyingredient?searchTerm="


class App extends React.Component {

constructor(){
  super()
    this.state = {
      cocktails: []
    }
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

const {cocktails} = this.state

  return (
    <div className="App">
      <div className="cocktailsContainer">
      <CocktailsContainer cocktails={cocktails} />
      </div>
      <h1 className="title">Welcome to Mixxy!</h1>
      <DrinkNameForm getDrinksName={this.getDrinksName}/>
      <br/>
      <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
    </div>
  );
}
}

export default App;


// "http://www.recipepuppy.com/api/?i=#{user_ingredient}"
//
// ?s=margarita
