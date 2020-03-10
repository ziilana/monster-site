import React from "react";
import { Component } from "react";
import { CardList } from "./components/CardList";

import SearchField from "./components/SearchField";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchText: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  handleChange = event => {
    this.setState({ searchText: event.target.value });
  };

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <div>
          <CardList list={filteredMonsters} />
        </div>

        <button onClick={() => this.setState({ searchText: "test" })} />

        <SearchField placeholder="huuhuu" handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
