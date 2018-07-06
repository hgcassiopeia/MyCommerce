import React, {Component} from 'react'

class Header extends Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount(){
        this.timerId = setInterval(()=>this.tick(),1000)
    }

    componentWillUnmount(){
        clearInterval(this.timerId)
    }

    tick(){
        this.setState({ date: new Date() })
    }

    render(){

        const reSizeImg = {height: 45}

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1 className="text-primary mt-2"><img src="/image/logo/logo.png" alt="seafood" style={reSizeImg} /> Seafood Cafe'</h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleString()}</h5>
                    </div>
                </div>
                <hr/>
            </div>
        )
    }
}

export default Header