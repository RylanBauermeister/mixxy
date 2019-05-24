import React from 'react'

class Form extends React.Component {

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
    this.props.getDrinks(event)
  }

  render(){
    return(
      <div>
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

export default Form
