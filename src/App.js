import React, { Component } from "react";
import "./App.css";
import Validation from "./components/Validation";
import Char from "./components/Char";

class App extends Component {
  state = {
    inputString: "",
  };
  countInputValue = (event) => {
    this.setState({ inputString: event.target.value });
  };
  deleteCharHandler = (index) => {
    const text = this.state.inputString.split("");
    text.splice(index, 1);
    const updatedText = text.join("");
    this.setState({ inputString: updatedText });
  };
  render() {
    const charList = this.state.inputString.split("").map((char, index) => {
      return (
        <Char
          character={char}
          key={index}
          clicked={() => this.deleteCharHandler(index)}
        />
      );
    });
    return (
      <div className="App">
        <input
          onChange={(event) => this.countInputValue(event)}
          value={this.state.inputString}
        ></input>
        <p>Lenght of text is: {this.state.inputString.length} characters</p>
        <Validation length={this.state.inputString.length} />
        {charList}
      </div>
    );
  }
}

export default App;
