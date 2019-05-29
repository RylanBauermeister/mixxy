import React, { Component } from 'react'
import CocktailsContainer from './cocktailsContainer'
import DrinkNameForm from '../components/drinkNameForm'
import DrinkIngredientForm from '../components/drinkIngredientForm'
import {Redirect} from 'react-router-dom'
import DetailedView from '../components/detailedView'

const nameURL = "http://localhost:3000/api/v1/searchbyname?searchTerm="
const ingredientURL = "http://localhost:3000/api/v1/searchbyingredient?searchTerm="

export default class Dashboard extends Component {

  constructor(props){
    super(props)
      this.state = {
        cocktails: [],
        lookingAtSingleCocktail: false,
        currentCocktail: {},
        cocktailsAreLoading: false
      }
    }

  getDrinksName = (event) => {
    this.setLoading()
    let searchedDrink = event.target.elements['searchTerm'].value
    fetch(nameURL + searchedDrink)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        this.setState({
          cocktails: data,
          cocktailsAreLoading: false
        })
      })
  }

  getDrinksIngredient = (event) => {
    this.setLoading()
    let searchedDrink = event.target.elements['searchTerm'].value
    fetch(ingredientURL + searchedDrink)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cocktails: data,
          cocktailsAreLoading: false
        })
      })
  }

  setCurrentCocktail = (cocktail) => {
    this.setState({
      currentCocktail: cocktail,
      lookingAtSingleCocktail: true
    })

  }

  setLoading(){
    this.setState({cocktailsAreLoading: true})
  }

  returnMainMenu = () => {

    this.setState({
      currentCocktail: null,
      lookingAtSingleCocktail: false
    })
  }

  addDrink = (cocktail) => {
    fetch("http://localhost:3000/api/v1/add_drink", {
      method: 'POST',
      body: JSON.stringify({drink_id: cocktail.id}),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }

  renderCocktails() {
    if (!this.state.cocktailsAreLoading){
      return  <CocktailsContainer cocktails={this.state.cocktails}
                                  setCurrentCocktail={this.setCurrentCocktail}/>

    } else {
        return <div className="loading-dimmer ui segment">
          <div className="ui active dimmer">
            <div className="ui text loader">Finding Drinks...</div>
          </div>
        </div>
    }


  }


  renderDetailedView = () => {
    const {currentCocktail} = this.state
    if(this.state.lookingAtSingleCocktail === true) {
      return <DetailedView
              currentCocktail={currentCocktail}
              returnMainMenu={this.returnMainMenu}
              addDrink={this.addDrink}
              />
    } else {
      return <div className="App">
          <div className="cocktailsContainer">
            {this.renderCocktails()}
          </div>
          <h1 className="title">Mixxy</h1>
          <div className="forms">
            <DrinkNameForm getDrinksName={this.getDrinksName}/>
            <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
          <br/>
          </div>
        </div>
    }
  }

  // renderUserDrinks = () => {
  //   console.log
  // }

  render(){
    if(!localStorage.token){
      return <Redirect to="/login" />
    }

    return (
      <div>
        {this.renderDetailedView()}
      </div>
    );
  }
}
