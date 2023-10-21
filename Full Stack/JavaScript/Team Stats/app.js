// Data structure (object) that stores information about our team.
const team = {
  _players : [
    {firstName: 'Matthew', lastName: 'McCane', age: 35},
    {firstName: 'Sharon', lastName: 'McCane', age: 33},
    {firstName: 'Mila', lastName: 'McCane', age: 7}
  ],
  _games : [
    {opponent: 'Woodland Hills', teamPoints: 24, opponentPoints: 21},
    {opponent: 'Hamptom', teamPoints: 3, opponentPoints: 17},
    {opponent: 'Riverside', teamPoints: 10, opponentPoints: 24}
  ],
  // Getter method used to retrieve the players property and games property.
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  // Add Player method that takes in data to add new players 
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);
  },
  // Scorekeeper information 
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);
  }

};



