import React, {Component} from 'react';

class ProductItem extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const {productName, unitPrice, thumbnail} = this.props.product
        const reSizeImg = {height: 200}

        return(
            <div className="col-md-3 col-sm-6">
                <img className="img-fluid img-thumbnail" src={thumbnail} style={reSizeImg} />
                <h5 className="mt-2">{productName}</h5>
                <p className="title text-right text-muted">{unitPrice} THB</p>
                <button className="btn btn-block btn-secondary title" onClick={() => this.props.onAddOrder(this.props.product)}>Buy</button>
                <hr/>
            </div>
        )
    }
}

export default ProductItem;