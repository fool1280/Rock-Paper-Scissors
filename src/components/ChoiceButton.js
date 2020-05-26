import React from 'react'

export default function ChoiceButton(props) {
    return (
        <div className="container">
            <button className="btn btn-success btn-lg m-1" onClick={() => props.onplay("rock")}>Rock</button>
            <button className="btn btn-success btn-lg m-1" onClick={() => props.onplay("paper")}>Paper</button>
            <button className="btn btn-success btn-lg m-1" onClick={() => props.onplay("scissors")}>Scissors</button>
        </div>
    )
}
