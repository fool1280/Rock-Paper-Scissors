import React, { Component } from 'react'
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import ChoiceButton from './components/ChoiceButton';
import { CHOICES } from "./utils";

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userC: CHOICES["defaultChoice"],
            computerC: CHOICES["defaultChoice"],
            userR: null,
            computerR: null,
            gameHistory: [],
            prompt: "Start"
        }
    }
    onplay = (userChoice) => {
        let itemArray = Object.keys(CHOICES); // sci, paper, rock, default
        let randomNum = Math.floor(Math.random()*(itemArray.length-1));
        this.setState({userC: CHOICES[userChoice], computerC: CHOICES[itemArray[randomNum]]});
        let i = itemArray.findIndex((item) => item === userChoice);
        if ((i+1 === randomNum) || (i === 2 && randomNum === 0)) {
            this.setState({
                userR: "Won",
                computerR: "Loss",
                prompt: "Victory!"
            })
        } 
        else if (i === randomNum) {
            this.setState({
                userR: "Tie",
                computerR: "Tie",
                prompt: "Tie!"
            })
        }
        else {
            this.setState({
                userR: "Loss",
                computerR: "Won",
                prompt: "Defeat!"
            })
        }
        this.state.gameHistory.push(this.state.userR);
        this.setState({gameHistory: this.state.gameHistory})
        let l = this.state.gameHistory.length;
        if (l>=3 && this.state.gameHistory.slice(l-3) === ["Won", "Won", "Won"]) {
          this.setState({prompt: "Flawless Victory!"});
        }
        console.log("Game History", this.state.gameHistory);
    }
    render() {
        return (
            <div className="App">
            <div className="container" >
              <div className="row mb-3">
                <div className="col-md-8 themed-grid-col">
                  <ChoiceCard title="You" choice={this.state.userC} result={this.state.userR}/>
                  <h1>{prompt}</h1>
      
                  <ChoiceButton onplay={this.onplay}></ChoiceButton>
                  <ChoiceCard title="Computer" choice={this.state.computerC} result={this.state.computerR}/>
                </div>
                <div className="col-md-4 themed-grid-col">
                  <h3>History</h3>
                  <span>
                    {this.state.gameHistory.map((item, i) => {
                      if (i>0) {
                        return <div key={i}>You {item} <br/></div>
                      } else return "";
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )
    }
}
