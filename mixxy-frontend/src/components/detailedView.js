import React from 'react'

class DetailedView extends React.Component {

  render(){
    return(
      <div className="detailedView">
          {console.log(this.props.currentCocktail)}
          <h1>{this.props.currentCocktail.name}</h1>
          <img className="detailedViewImg" src={this.props.currentCocktail.img_url}/>
          <h2>{this.props.currentCocktail.ingredients.map((ingredient)=>{
              return <li>{ingredient.name}: {ingredient.amount}</li>
            })}
            </h2>
          <h2>{this.props.currentCocktail.instructions}</h2>
      </div>
    )
  }

}

export default DetailedView

// <ul>{this.props.currentCocktail.ingredients.map((ingredient)=>{
//      return <li>{ingredient}</li>
//   })}</ul>
