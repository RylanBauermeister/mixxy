import React from 'react'

class Cocktail extends React.Component {

  render(){
    return(
      <div className="cocktail"
           onClick={() => this.props.setCurrentCocktail(this.props.cocktail)}
            >
          <h3 className="cocktail-title">{this.props.cocktail.name}</h3>
          <img className="cocktailImage" src={this.props.cocktail.img_url} alt={this.props.cocktail.name}/>

      </div>
    )
  }

}

export default Cocktail
