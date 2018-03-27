import React from 'react'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    
    handlePlusClick() {
        console.log("Plus clicked")
    }
    handleMinusClick() {
        console.log("Minus clicked")
    }
    
    render(){
        return (
            <div className="App">
                <h1>Counter App</h1>
                <h2>0</h2>
                <button onClick={this.handlePlusClick}>+</button>
                <button onClick={this.handleMinusClick}>-</button>
            </div>
        )
    }
}

export default App 