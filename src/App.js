import React from 'react'

class App extends React.Component {
    
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
    
    render(){
        return (
            <div className="App">
                <h1>Counter App</h1>
                <h2>{this.state.count}</h2>
                <button onClick={this.handlePlusClick.bind(this)}>+</button>
                <button onClick={this.handleMinusClick.bind(this)}>-</button>
            </div>
        )
    }
}

export default App 