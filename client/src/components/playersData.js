import React from "react";
import PlayersCard from "./playersCard";

class PlayersData extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/api/players")
      .then(res => res.json())
      .then(res => this.setState({ players: res }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="card-wrapper">
        {this.state.players.map(player => (
          <PlayersCard key={player.id} data={player} />
        ))}
      </div>
    );
  }
}

export default PlayersData;
