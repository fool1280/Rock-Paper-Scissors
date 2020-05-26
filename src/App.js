
import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard';
import ChoiceButton from './components/ChoiceButton';
import Start from './components/Start';
import { CHOICES } from "./utils";

/*
const CHOICES = {
  scissors: {
    name: "scissors",
    url: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png",
    win: "rock"
  },
  paper: {
    name: "paper",
    url: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
    win: "scissors"
  },
  rock: {
    name: "rock",
    url:
      "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
    win: "paper"
  },
  defaultChoice: {
    name: "default",
    url: "http://www.thewateringhole.co.uk/wp-content/uploads/2012/12/play.png"
  }
};*/

function AppFunction() {
  const [userC, setUserC] = useState(CHOICES["defaultChoice"])
  const [computerC, setComputerC] = useState(CHOICES["defaultChoice"])
  const [userR, setUserR] = useState(null);
  const [computerR, setComputerR] = useState(null);
  
  const [prompt, setPrompt] = useState("Start");

  const onplay = (userChoice) => {
    setUserC(CHOICES[userChoice]);
    let itemArray = Object.keys(CHOICES); // sci, paper, rock, default
    let randomNum = Math.floor(Math.random()*(itemArray.length-1));
    setComputerC(CHOICES[itemArray[randomNum]]);
    let i = itemArray.findIndex((item) => item === userChoice);
    if ((i+1 === randomNum) || (i === 2 && randomNum === 0)) {
      setUserR("Won")
      setComputerR("Loss")
      setPrompt("Victory!");
      gameHistory.push(userR)
    } 
    else if (i === randomNum) {
      setUserR("Tie")
      setComputerR("Tie")
      setPrompt("Tie!");
      gameHistory.push(userR)
    }
    else {
      setUserR("Loss")
      setComputerR("Won")
      setPrompt("Defeat!");
      gameHistory.push(userR);
    }
    setHistory(gameHistory);
    let l = gameHistory.length;
    if (l>=3 && gameHistory.slice(l-3) === ["Won", "Won", "Won"]) {
      setPrompt("Flawless Victory!");
    }
    console.log("Game History", gameHistory);
  }

  const [gameHistory, setHistory] = useState([]);

  return (
    <div className="App">
      <div className="container" >
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="You" choice={userC} result={userR}/>
            <h1>{prompt}</h1>

            <ChoiceButton onplay={onplay}></ChoiceButton>
            <ChoiceCard title="Computer" choice={computerC} result={computerR}/>
          </div>
          <div className="col-md-4 themed-grid-col">
            <h3>History</h3>
            <span>
              {gameHistory.map((item, i) => {
                if (i>0) {
                  return <div key={i}>You {item} <br/></div>
                } else return "";
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppFunction;

/*
import React, { Component } from 'react'
import ChoiceCard from './components/ChoiceCard'
import './App.css'

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ChoiceCard name="You" winner={false} imgURL={choices.rock} title="rock"/>
        <ChoiceCard name="Computer" winner={true} imgURL={choices.paper} title="paper"/>
      </div>
    )
  }
}*/

