import React from 'react'
import UserCocktail from '../components/userCocktail'

class UserDrinks extends React.Component {

  render(){
    return(
      <div className="userCocktailItem">
      {this.props.userDrinks.map((drink)=>{
        return <UserCocktail
                drink={drink}
                setCurrentCocktail={this.props.setCurrentCocktail}
                />
      })}
      </div>
    )
  }

}

export default UserDrinks
