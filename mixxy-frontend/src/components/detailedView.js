import React from 'react'

class DetailedView extends React.Component {

  render(){
    return(
      <div className="detailedView">
          <h1>{this.props.currentCocktail.name}</h1>
          <img className="detailedViewImg" src={this.props.currentCocktail.img_url}/>
          <h4>Ingredients: {this.props.currentCocktail.ingredients.map((ingredient)=>{
              return <li>{ingredient.name}: {ingredient.amount}</li>
            })}
          </h4>
          <h4>Instructions: {this.props.currentCocktail.instructions}</h4>
          <button className="button" onClick={this.props.returnMainMenu}>Go back to drinks</button>
          <button onClick={()=> this.props.addDrink(this.props.currentCocktail)}>Add drink</button>
      </div>
    )
  }

}

export default DetailedView

// <ul>{this.props.currentCocktail.ingredients.map((ingredient)=>{
//      return <li>{ingredient}</li>
//   })}</ul>