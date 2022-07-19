import inquirer from 'inquirer'
import Deck from './Deck.js'
import Player from './Player.js'

const play = async () => {
  let deck
  let players = []
  const dealer = new Player('Dealer') // init of Dealer
  const inq = inquirer

  // Welcome message
  await inq.prompt([{name: 'start', message: 'Lets play some BlackJack! Press the "any" key to start (if you can find it!)'}])
  
  // Game initialization to gather info about number of players and create them accordingly
  await inq.prompt([{name: 'numPlayers', message: 'How many players wants to play? ', type: 'number' }])
    .then(async a => {
      for (let i = 0; i < a.numPlayers; i++) {
        await inq.prompt([{name: 'playerName', message: `Enter name of Player ${i + 1}: `}]).then(a => {
          players.push(new Player(a.playerName))
        })
      }
    })

  console.log(players)
}

play()