import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// after hooks
export function App() {
  const [item, setItem] = useState(0);
  const incrementItem = () => {
    setItem(item + 1);
  };
  const decrementItem = () => {
    setItem(item - 1);
  };
  return (
    <div className="App">
      <h1>Hello {item}</h1>
      <br />
      <button onClick={incrementItem}>Increase!</button>
      <button onClick={decrementItem}>Decrease!</button>
    </div>
  );
}
// before hooks
export class AppUgly extends React.Component {
  state = {
    item: 0,
  };
  render() {
    const { item } = this.state;
    return (
      <div className="App">
        <h1>Hello {item}</h1>
        <br />
        <button onClick={this.incrementItem}>Increase!</button>
        <button onClick={this.decrementItem}>Decrease!</button>
      </div>
    );
  }
  incrementItem = () => {
    this.setState((state) => {
      return {
        item: this.state.item + 1,
      };
    });
  };
  decrementItem = () => {
    this.setState((state) => {
      return {
        item: this.state.item - 1,
      };
    });
  };
}
