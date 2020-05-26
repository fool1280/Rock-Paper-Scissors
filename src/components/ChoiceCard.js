import React from 'react'

export default function ChoiceCard(props) {
    return (
        <div className={`choice-card ${props.result}`}>
            <h1>{props.title}</h1>
            <img src={props.choice.url} alt={props.choice.name}/>
            <h3>{props.result}</h3>
        </div>
    )
}

/*
import React, { Component } from 'react'

export default class ChoiceCard extends Component {
    render() {
        return (
            <div className={`choice-card ${this.props.winner ? "winner" : "loser"}`}>
                <h1>{this.props.name}</h1>
                <img src={this.props.imgURL} alt={this.props.title}/>
                <h3>{this.props.winner ? "Won" : "Loss"}</h3>
            </div>
        )
    }
}*/

