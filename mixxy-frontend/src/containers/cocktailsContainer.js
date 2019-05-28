import React from 'react'
import Cocktail from '../components/cocktail'

class CocktailsContainer extends React.Component {

  render(){
    return(
      <div className="cocktailItem">{
        this.props.cocktails.map((cocktail)=>{
          return <Cocktail
                  cocktail={cocktail}
                  setCurrentCocktail={this.props.setCurrentCocktail}
                  />
        })
      }</div>
    )
  }

}

export default CocktailsContainer
