import inquirer from 'inquirer'
import Deck from './Deck.js'
import Player from './Player.js'

const inq = inquirer

// Function to present the current hand and points of a player
const presentPlayerStats = (player) => {
  console.log('-------------------')
  if (player.name === 'Dealer') {
    console.log(`The hand of the dealer contains:`)
  } else {
    console.log(`The hand of player ${player.name} contains:`)
  }

  // Loop out string value of hand
  for (const card of player.getHand()) {
    console.log(card.toString())
  }

  if (player.bust) {
    console.log(`and went BUST with ${player.getPoints()} points. Bummer...\n`)
  } else {
    console.log(`and has ${player.getPoints()} points!\n`)
  }
}

let playAgain = false
const play = async () => {
  let deck
  let players = []
  const dealer = new Player('Dealer') // init of Dealer

  // Welcome message
  await inq.prompt([{name: 'start', message: 'Lets play some BlackJack! Press the "any" key to start (if you can find it!)'}])
  
  // Game initialization to gather info about number of players and create them accordingly
  await inq.prompt([{
    name: 'numPlayers',
    message: 'How many players wants to play? ',
    type: 'list',
    choices: [1, 2, 3, 4, 5]
  }])
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

  // ------------------------------------------
  // Deal first two cards to players and Dealer
  for (let i = 0; i < 2; i++) {
    for (let n = 0; n < players.length; n++) {
      players[n].drawCard(deck.dealCard())
    }
  }

  for (let i = 0; i < 2; i++) {
    dealer.drawCard(deck.dealCard())
  }
  
  // ------------------------------------------
  // Start playing rounds for players
  let roundFinished = false
  let exitGame = false
  while (!roundFinished && !exitGame) {
    // Each player gets his round of Hit/Stand
    for (const player of players) {
      console.log('\n\n---------------------')
      console.log(`Player ${player.name}'s turn`)
      while (!player.stand && !player.bust && !exitGame) {
        presentPlayerStats(player)
        await inq.prompt([{name: 'choice', message: 'Do you want to hit or stand?\n', type: 'list', choices: ['Hit', 'Stand', 'Restart Game', 'Chicken-out']}])
          .then(a => {
            if (a.choice === 'Hit') {
              player.drawCard(deck.dealCard())
              if (player.getPoints() > 21) player.setBust()
              return
            } else if (a.choice === 'Stand') {
              player.setStand()
              return
            } else if (a.choice === 'Restart Game') {
              exitGame = true
              playAgain = true
              return
            } else if (a.choice === 'Chicken-out') {
              exitGame = true
              return
            }
          })

        if (exitGame) {
          break;
        }
      }

      if (exitGame) {
        break;
      }

      presentPlayerStats(player)
    }

    if (players.every(player => player.stand || player.bust)) {
      roundFinished = true
    }
  }

  if (exitGame) {
    return
  }

  // --------------------------------------------
  // Dealer plays
  console.log('\n\n---------------------')
  console.log("Dealer's turn")
  while (!dealer.stand && !dealer.bust) {
    if (dealer.getPoints() < 17) {
      console.log('DEALER HITS')
      dealer.drawCard(deck.dealCard())
    } else if (dealer.getPoints() > 21) {
      dealer.setBust()
    } else {
      dealer.setStand()
    }
  }

  if (dealer.bust) {
    console.log('\nDEALER FUDGED UP AND LOST!')
  } else {
    console.log('DEALER STANDS\n\n')
  }
  presentPlayerStats(dealer)

  // Points presentation and game end
  console.log('AAAAND THE WINNER IIIIIS!!!!! *drumroll* ......')
  await setTimeout(() => { // Setting some buildup for the great reveal
    const allPlayers = [...players, dealer].filter(player => !player.bust) // filtering out players who went bust
    let winner = allPlayers[0] || undefined

    if (winner) {
      for (const player of allPlayers) {
        if (winner.getPoints() < player) { // Comparing the points for the players and replacing if higher points are found
          winner = player
        }
      }

      console.log(`${winner.name.toUpperCase()}!!!\n\n\n`)
    } else {
      console.log('No winner this time... sorry...\n\n\n')
    }

    inq.prompt([{name: 'again', message: 'Play again?', type: 'list', choices: ['Yes', 'No']}]).then((a) => {
      if (a.again === 'Yes') {
        play()
      } else {
        console.log('Thanks for playing')
      }
    })
  }, 3000)
}

await play()
