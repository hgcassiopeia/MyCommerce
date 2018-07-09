import React, { Component } from 'react';
import ProductItem from './ProductItem'

class ProductList extends Component{

    getProducts(){
        return this.props.products && this.props.products.map(product => (
            <ProductItem key={product.productId} product={product} onAddOrder={this.props.onAddOrder} />
        ))
    }

    render(){
        return(
            <div className="row">
                {this.getProducts()}
            </div>
        )
    }
}

export default ProductList