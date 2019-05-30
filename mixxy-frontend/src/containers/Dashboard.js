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
        if(data.length === 0){
          this.props.setFeedback("No cocktails found matching the given criteria")
        }
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
        if(data.length === 0){
          this.props.setFeedback("No cocktails found matching the given criteria")
        }
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
      this.props.setFeedback(`Added ${cocktail.name} to "My Drinks"`)
    })
  }

  renderCocktails() {
    if(this.state.cocktails.length === 0 && !this.state.cocktailsAreLoading){
      return null
    } else if (!this.state.cocktailsAreLoading){
      return  <div className="cocktailsContainer">
        <h2 className="card-title">Found Cocktails</h2>
        <CocktailsContainer cocktails={this.state.cocktails}
                                    setCurrentCocktail={this.setCurrentCocktail}/>
      </div>

    } else {
        return <div className="cocktailsContainer">
          <div className="loading-dimmer ui segment">
            <div className="ui active dimmer">
              <div className="ui text loader">Finding Drinks...</div>
            </div>
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
            {this.renderCocktails()}
          <h1 className="title">Mixxy</h1>
          <div className="forms">
            <DrinkNameForm getDrinksName={this.getDrinksName}/>
            <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
          <br/>
          </div>
        </div>
    }
  }

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
