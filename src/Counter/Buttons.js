import React from 'react'

export default (props) => {
    return (
        <div>
            <button onClick={props.OnPlusClick}>+</button>
            <button onClick={props.OnMinusClick}>-</button>
        </div>
    )
}

