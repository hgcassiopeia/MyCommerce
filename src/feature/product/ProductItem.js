import React from 'react';

const ProductItem = (props) => {
    const {productName, unitPrice} = props
    return (
        <div>
            <p>Product : {productName}</p>
            <p>Price : {unitPrice}</p>
        </div>
    )
}

export default ProductItem;