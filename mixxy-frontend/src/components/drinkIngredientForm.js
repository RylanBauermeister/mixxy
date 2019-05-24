import React from 'react'

class DrinkIngredientForm extends React.Component {

  constructor(){
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getDrinksIngredient(event)
    this.setState({
      searchTerm: ""
    })
  }

  render(){
    return(
      <div>
      <h1>Search for a drink by ingredient!</h1>
      <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      name="searchTerm"
      value={this.state.searchTerm}
      onChange={this.handleChange}
      placeholder="ingredient name"
      />
      <input
      type="submit"
      value="submit"
      />
      </form>
      </div>
    )
  }

}

export default DrinkIngredientForm
