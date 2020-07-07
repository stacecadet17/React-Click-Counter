import React from "react";

class Clicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, previousCounts: [] };
  }

  click(event) {
    console.log(event.type);
    this.setState({ count: this.state.count + 1 });
  }

  reset(event) {
    const previousCounts = this.state.previousCounts;
    previousCounts.push(this.state.count);
    console.log(previousCounts);
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <h1>Hiiiiiii {this.state.count}</h1>
        <button onClick={this.click.bind(this)}>Click here</button>
        <br />
        <button onClick={this.reset.bind(this)}>Reset</button>
        <br />
        <ul>
          {this.state.previousCounts.map((count, idx) => (
            <li key={idx}>
              {idx}:{count}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Clicker;
