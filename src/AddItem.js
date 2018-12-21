import React, { Component } from 'react'
import Options from './Options'

class AddItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newItem: '',
      newQuantity: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [ event.target.name ]: event.target.value 
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const selectedProduct = this.props.products.filter(product => product.id === parseInt(this.state.newItem)) || this.state.newItem
  
    this.props.addItem(selectedProduct[0], this.state.newQuantity)

    this.setState({
      newItem : ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="Quantity">Quantity</label>
          <input type="number" className="form-control" id="Quantity" name="newQuantity" placeholder="Quantity" onChange={this.handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="products">Products</label>
          <select className="form-control" id="products" name="newItem" placeholder="Select an option" onChange={this.handleChange}>
            <option selected disabled>Choose a Product</option>
            {this.props.products.map(product => {
              return <Options name={product.name} id={product.id}/>
            })}

          </select>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!this.state.newItem}>Add to Cart</button>

      </form>
    )
  }
}

export default AddItem