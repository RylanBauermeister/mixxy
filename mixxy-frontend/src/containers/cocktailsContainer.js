import React from 'react'
import Cocktail from '../components/cocktail'

class CocktailsContainer extends React.Component {

  render(){
    return(
      <div className="cocktailItem">{
        this.props.cocktails.map((cocktail)=>{
          return <Cocktail cocktail={cocktail}/>
        })
      }</div>
    )
  }

}

export default CocktailsContainer
