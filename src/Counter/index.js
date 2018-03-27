import React from 'react'
import Count from './Count.js'
import Buttons from './Buttons.js'

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
                <Count num={this.state.count}/>
                <Buttons 
                    OnPlusClick={this.handlePlusClick.bind(this)}
                    OnMinusClick={this.handleMinusClick.bind(this)}
                />
            </div>
        )
    }
}

export default Counter