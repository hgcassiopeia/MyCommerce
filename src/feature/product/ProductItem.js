import React, {Component} from 'react';

class ProductItem extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {productName, unitPrice} = this.props

        return(
            <div>
                <p>Product : {productName}</p>
                <p>Price : {unitPrice}</p>
            </div>
        )
    }
}

export default ProductItem;