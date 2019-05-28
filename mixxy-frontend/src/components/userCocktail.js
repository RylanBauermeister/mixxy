import React from 'react'

class UserCocktail extends React.Component {

  render(){
    return(
    <div className="userCocktail">
    <h1>{this.props.drink.name}</h1>
    <img className="cocktailImage" src={this.props.drink.img_url}/>
    </div>
    )
  }

}

export default UserCocktail
