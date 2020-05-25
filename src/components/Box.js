import React from 'react'


//All component have to start with capital
//All location folder too.

export default function Box(props) {
    return (
        <div className={`box ${props.color}`}>
            My {props.name} box {props.color};
        </div>
    )
}
