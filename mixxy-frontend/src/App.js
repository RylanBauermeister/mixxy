import React from 'react';
import logo from './logo.svg';
import './App.css';
import CocktailsContainer from './containers/cocktailsContainer'
import DrinkNameForm from './components/drinkNameForm'
import DrinkIngredientForm from './components/drinkIngredientForm'
import DetailedView from './components/detailedView'

const nameURL = "http://localhost:3000/api/v1/searchbyname?searchTerm="
const ingredientURL = "http://localhost:3000/api/v1/searchbyingredient?searchTerm="


class App extends React.Component {

constructor(){
  super()
    this.state = {
      cocktails: [],
      lookingAtSingleCocktail: false,
      currentCocktail: {}
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

setCurrentCocktail = (cocktail) => {
  console.log("hello")
  this.setState({
    currentCocktail: cocktail,
    lookingAtSingleCocktail: true
  })

}

returnMainMenu = () => {
  console.log("hello")
  this.setState({
    currentCocktail: null,
    lookingAtSingleCocktail: false
  })
}


renderDetailedView = () => {
  const {cocktails, currentCocktail} = this.state
  if(this.state.lookingAtSingleCocktail === true) {
    return <DetailedView
            currentCocktail={currentCocktail}
            returnMainMenu={this.returnMainMenu}
            />
  } else {
    return <div className="App">
        <div className="cocktailsContainer">
        <CocktailsContainer
          cocktails={cocktails}
          setCurrentCocktail={this.setCurrentCocktail}
          />
        </div>
        <h1 className="title">Welcome to Mixxy!</h1>
        <div className="forms">
        <DrinkNameForm getDrinksName={this.getDrinksName}/>

        <DrinkIngredientForm getDrinksIngredient={this.getDrinksIngredient}/>
        <br/>
        </div>
      </div>
  }
}

  render(){



  return (
    <div>
      {this.renderDetailedView()}
    </div>
  );
}
}

export default App;



// "http://www.recipepuppy.com/api/?i=#{user_ingredient}"
//
// ?s=margarita
