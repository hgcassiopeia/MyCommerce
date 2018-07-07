import React, { Component } from 'react';
import Calcualtor from './Calculator'
import ProductList from '../product/ProductList'

class Monitor extends Component{

    constructor(props){
        super(props)
        this.state = { totalPrice: 0, orders: [] }
    }

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-9">
                        <ProductList products={this.props.products} />
                    </div>
                    <div className="col-md-3">
                        <Calcualtor totalPrice={this.state.totalPrice} orders={this.state.orders} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor