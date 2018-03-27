import React from 'react'

class Counter extends React.Component {
    
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    handlePlusClick() {
        this.setState({
            count: this.state.count + 1
        })
        console.log("Plus clicked")
    }
    handleMinusClick() {
        if(this.state.count > 0) {
            this.setState({
                count: this.state.count - 1
            })
        }
        console.log("Minus clicked")
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={this.handlePlusClick.bind(this)}>+</button>
                <button onClick={this.handleMinusClick.bind(this)}>-</button>
            </div>
        )
    }
}