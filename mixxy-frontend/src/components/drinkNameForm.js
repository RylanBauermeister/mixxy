import React from 'react'

class drinkNameForm extends React.Component {

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
    this.props.getDrinksName(event)
    this.setState({
      searchTerm: ""
    })
  }

  render(){
    return(
      <div>
      <h1>Search for a drink by name!</h1>
      <form onSubmit={this.handleSubmit}>
      <input
      type="text"
      name="searchTerm"
      value={this.state.searchTerm}
      onChange={this.handleChange}
      placeholder="drink name"
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

export default drinkNameForm
