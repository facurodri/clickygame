import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar/NavBar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    clicked: [],
    score: 0,
    hScore: "",
    message: ""
  };

  //fisher-Yates shuffle.
  shuffleGame(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.setState({ message: "" });
      this.handleIncrement();
    } else {
      this.setState({ message: " You Lose, Try Again!" });
      console.log("This is the last score???????? " + this.state.score);
      this.handleRestart();
    }
    const shuffledCards = this.shuffleGame(friends);
    this.setState({ friends: shuffledCards });
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore });
    if (this.score === 12) {
      this.setState({ message: "You Win!" });
      this.handleRestart();
    }
  };

  handleRestart = () => {
    this.setState({
      score: 0,
      clicked: []
    });
    this.state.hScore = this.state.score;
    this.shuffleGame(friends);
  };

  render() {
    return (
      <Wrapper>
        <NavBar />
        <h1>
          <span className="badge badge-pill badge-success">
            CLICKED {this.state.score}
          </span>
        </h1>
        <h1>
          <span className="badge badge-pill badge-primary">
            Message: {this.state.message}
          </span>
        </h1>
        <h1>
          <span className="badge badge-pill badge-danger">
            Previous Score: {this.state.hScore}
          </span>
        </h1>

        <div className="card-container">
          {this.state.friends.map(corgi => (
            <FriendCard
              onClick={this.handleClick}
              id={corgi.id}
              key={corgi.id}
              image={corgi.image}
            />
          ))}
        </div>
      </Wrapper>
    );
  }
}
export default App;
