import React from 'react'

class ItemDetail extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    
    return(
    <>
      <h3>{this.props.item.name}</h3>
      <ul>
        <li>Happiness: {this.props.item.happiness}</li>
        <li>${this.props.item.price}</li>
      </ul>
    </>
    )
  }
}

export default ItemDetail