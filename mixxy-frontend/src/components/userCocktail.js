import React from 'react'

class UserCocktail extends React.Component {

  constructor(props){
    super(props)

    this.viewCocktail = this.viewCocktail.bind(this)
  }

  trim(str){
    return str.length > 15 ? str.substr(0, 15) + '...' : str;
  }

  viewCocktail(){
    this.props.toggleDrinks()
    this.props.setCurrentCocktail(this.props.drink)
  }

  render(){
    return(
    <div className="userCocktail" onClick={this.viewCocktail}>
    <h2 className="cocktail-title">{this.trim(this.props.drink.name)}</h2>
    <img className="cocktailImage" src={this.props.drink.img_url} alt={this.props.drink.name}/>
    </div>
    )
  }

}

export default UserCocktail
