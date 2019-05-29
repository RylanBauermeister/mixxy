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
        <h3>Search by name</h3>
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="ui action input">
            <input type="text" name="searchTerm" value={this.state.searchTerm} onChange={this.handleChange} placeholder="drink name"/>
            <button className="ui icon button" type="submit">
              <i className="search icon"></i>
            </button>
          </div>


        </form>
      </div>
    )
  }

}

export default drinkNameForm
