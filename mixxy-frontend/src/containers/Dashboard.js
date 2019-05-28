import React, { Component } from 'react'
import CocktailsContainer from './cocktailsContainer'
import DrinkNameForm from '../components/drinkNameForm'
import DrinkIngredientForm from '../components/drinkIngredientForm'
import {Redirect} from 'react-router-dom'

const nameURL = "http://localhost:3000/api/v1/searchbyname?searchTerm="
const ingredientURL = "http://localhost:3000/api/v1/searchbyingredient?searchTerm="

export default class Dashboard extends Component {

  constructor(props){
    super(props)
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
    if(!localStorage.token){
      return <Redirect to="/login" />
    }

    return <div className="dashboard">
              <div className="cocktailsContainer">
                <CocktailsContainer cocktails={this.state.cocktails} />
              </div>
              <h1 className="title">Welcome to Mixxy!</h1>
              <div className="forms">
                <DrinkNameForm getDrinksName={this.getDrinksName}/>

                <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
                <br/>
              </div>
            </div>;
  }
}
