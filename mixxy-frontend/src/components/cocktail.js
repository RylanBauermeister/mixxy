import React from 'react'

class Cocktail extends React.Component {

  render(){
    return(
      <div className="cocktail">
          <h3>{this.props.cocktail.name}</h3>
          <img className="cocktailImage" src={this.props.cocktail.img_url}/>
      </div>
    )
  }

}

export default Cocktail
