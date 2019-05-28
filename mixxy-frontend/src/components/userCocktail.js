import React from 'react'

class UserCocktail extends React.Component {

  render(){
    return(
    <div className="userCocktail" onClick={()=>this.props.setCurrentCocktail(this.props.drink)}>
    <h1>{this.props.drink.name}</h1>
    <img className="cocktailImage" src={this.props.drink.img_url}/>
    </div>
    )
  }

}

export default UserCocktail
