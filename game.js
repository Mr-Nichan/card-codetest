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
      let numDecks = 1
      // Creating number of players and decks
      for (let i = 0; i < a.numPlayers; i++) {
        // Add one extra deck per every fourth player
        if (i % 4 === 0) {
          numDecks++
        }

        await inq.prompt([{name: 'playerName', message: `Enter name of Player ${i + 1}: `}]).then(a => {
          players.push(new Player(a.playerName))
        })
      }
      
      deck = new Deck(numDecks)
    })

  // Deal first two cards to players and Dealer
  for (let i = 0; i < 2; i++) {
    for (let n = 0; n < players.length; n++) [
      players[n].drawCard(deck.dealCard())
    ]
  }

  // let roundFinished = false
  // while (!roundFinished) {
  //   for (player in players) {
  //     console.log(player)
  //   }
  //   if (players.every(player => player.stand)) {
  //     roundFinished = true
  //   }
  // }

  console.log(players)
}

play()