import React, { Component } from 'react';

class Calculator extends Component{
    render(){
        return(
            <div>
                <h1 className="text-right">340.0</h1>
                <hr/>
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        Test1 x 1
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                    <li className="text-right text-success title">
                        Test2 x 2
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                </ul>
                <hr/>
                <button className="btn btn-block btn-danger title">Confirm</button>
                <button className="btn btn-block btn-secondary title">Cancel</button>
            </div>
        )
    }
}

export default Calculator