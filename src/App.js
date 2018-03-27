import React from 'react'
import Counter from './Counter'

class App extends React.Component {
    
    render(){
        return (
            <div className="App">
                <h1>Counter App</h1>
                <Counter/>
                <Counter/>
            </div>
        )
    }
}

export default App 