const team = {
  _players: [
    {firstName: 'Pablo', lastName: 'Sanchez', age: 20},   {firstName: 'Pedro', lastName: 'Espejo', age: 19}, {firstName: 'Julio', lastName: 'Montoya', age: 18}],
 
  _games: [
    {opponent: 'Patriotas', teamPoints: 4, opponentPoints: 2}, {opponent: 'Realistas', teamPoints: 3, opponentPoints: 1}, {opponent: 'Surrealistas', teamPoints: 4, opponentPoints: 1}],

 get players () {
   return this._players;
 },
 
 get games () {
   return this._games; 
 },
 
 addPlayer (firstName, lastName, age) {
   let player = {
     firstName: firstName,
     lastName: lastName,
     age: age
   };
   this.players.push(player);
 },
 addGame (opp, myPts, oppPts){
   const game = {
     opponent: opp,
     teamPoints: myPts,
     opponentPoints: oppPts
   };
   this.games.push(game);
 }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

// console.log(team.players);

team.addGame('Llano', 5, 2);
team.addGame('Capital', 4, 2);
team.addGame('Oriente', 3, 1);

console.log(team.games);
