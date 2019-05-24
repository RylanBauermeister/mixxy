import React from 'react';
import logo from './logo.svg';
import './App.css';
import Cocktail from './components/cocktail'
import Form from './components/form'

const URL = "http://localhost:3000/api/v1/searchbyname?searchTerm=gin"

class App extends React.Component {

// componentDidMount(){
//
// }


getDrinks = (event) => {
  let searchedDrink = event.target.elements['searchTerm'].value
  fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
}

  render(){

  return (
    <div className="App">
      <Cocktail/>
      <Form getDrinks={this.getDrinks}/>
    </div>
  );
}
}

export default App;


// "http://www.recipepuppy.com/api/?i=#{user_ingredient}"
//
// ?s=margarita
