import React from 'react'
import UserCocktail from '../components/userCocktail'

class UserDrinks extends React.Component {

  render(){
    return(
      <div className="userCocktailItem">
      <h2 className="card-title">My Cocktails</h2>
      <div className="flex-container">
      {this.props.userDrinks.map((drink)=>{
        return <UserCocktail
                key={"user-"+drink.name+"-"+drink.id}
                toggleDrinks={this.props.toggleDrinks}
                drink={drink}
                setCurrentCocktail={this.props.setCurrentCocktail}
                />
      })}
    </div>
      </div>
    )
  }

}

export default UserDrinks
