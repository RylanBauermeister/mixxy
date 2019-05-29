import React from 'react'

class UserDrinkDetailedView extends React.Component {

  render(){
    return(
      <div className="detailedView">
          <h1 className="card-title">{this.props.currentCocktail.name}</h1>
          <img className="detailedViewImg" src={this.props.currentCocktail.img_url}/>
          <h4>Ingredients: {this.props.currentCocktail.ingredients.map((ingredient)=>{
              return <li>{ingredient.name}: {ingredient.amount}</li>
            })}
          </h4>
          <h4>Instructions: {this.props.currentCocktail.instructions}</h4>
          <button className="ui left inverted green labeled icon button" onClick={this.props.returnMyDrinks}>
            <i class="arrow left icon"></i>
            Back
          </button>

          <button className="ui left inverted red labeled icon button" onClick={()=>this.props.deleteDrink(this.props.currentCocktail)}>
            <i class="trash alternate icon"></i>
            Delete from my drinks
          </button>
      </div>
    )
  }

}

export default UserDrinkDetailedView
