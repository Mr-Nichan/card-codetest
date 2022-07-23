# bld card-codetest

## Instructions

### ☝️ Working as instructed
Run `npm install` to install dependencies and then run `npm run start` to start gambling.

### ☝️ Nice touch :D
[Stödlinjen](https://stodlinjen.se/)

## Introduction
Setting up the project I first need to think about the choice of technology and then the CLI part. I'm thinking about picking Java or python for this since that lends itself very well to these types of applications. But I haven't coded in either Java nor Python in quite some time and the packaging to ease of use is e bit cumbersome compared to just using node.
### ☝️ Indeed. Node is great for this. Good choice. 

Then I start thinking about how to make it as easy as possible to accept user input through a CLI and so I wont have to spend too much time building the interaction part of it all.
### ☝️ Good call

A quick google search and I find some promising libraries that are tried and true. Inquirer and Commander was the two most popular I found. I opted for using Inquirer even though it was not as popular (in terms of weekly downloads) since it looked simpler to get into in the time span of this challenge and I didn't need the additional bells and whistles that came with Commander.
### ☝️ Good call

## Game ON!

Now i need to pick what game to simulate in my CLI. 
### ☝️ Did you really need to do this?
I will choose BlackJack since it is a game that I have a fairly good understanding of and the logic is quite straight forward. The only thing I can think of now that might be a bit tedious to get right is the point counting since the Ace can be both valued as 1 or 11.
### ☝️ Yes, a bit tedious, especially since it wasn't asked for ;)

## Blueprinting comes first

I need to think about what classes the project should consist of. this way I wont have to circle back and rewrite as much if I have a clear game-plan (no pun intended). To be able to play we need Players, the "house" is a player too, and we need a deck of cards which of course consist of a number of individual cards.
### ☝️ Scope creeeeep

Building classes for these three parts would be a good start. Then comes thinking about methods to be created in these classes to create the behavior we need in this game.
### ☝️ The only behavior necessary would be the one in the original requirements

### Player
The Player object needs to be initialized with a name, type of player (human/house), an empty hand and something to store the total current value of the hand.
### ☝️ House / Dealer is scope creep. Additionally, blackjack point calculation is housed in them player class, tying it to that specific game. Not great if in a casino and you want to play slots 🤦‍♂️

### Deck
The Deck object needs to be able to initialize ie. create the cards with the correct number and values of cards. It then needs to be able to shuffle the cards. Lastly it needs to be able to deal a card to whomever requests a card.
### ☝️ On scope

### Card
The Card object should only need to be initialized with a value, a face and a suit. I feel listing the reading of the value a bit redundant..
### ☝️ On scope

## Logic

Since this game is turn based the game will be built using loops and prompts halting these loops to collect the players wish to either hit or stand. At the start of each game the players are each dealt two cards facing up before the game begins. The dealer should be dealt one card facing up and one card facing down, but I'm all for transparency so I'll be going for every card in play being face up.
### ☝️ Cards dealt face up on scope. Rest is scope creeeeep

#### Player
Each player in order will then have the choice to either be dealt an additional card or to "Stand" and not receive more cards. Each player will try to get as close to 21 points as possible, if the value of the cards on hand exceeds 21 the player is bust and looses this round and should go stand in a dark corner contemplating his/her life decisions and what lead to them being here gambling away their kids savings account. When each player has had their turn hitting or standing it is the Dealer's (the house) turn to play.
### ☝️ All scope creep. 

#### Dealer
The dealer's playing is rules based and will dictate whether or not a card should be taken or not. If the dealer's hand has a total of 17 or more the dealer must stand. if it is below 17 the dealer must take a card until the total is 17 or more. If the dealer has an ace, and counting it as 11 would bring the total to 17 or more (but not over 21), the dealer must count the ace as 11 and stand.
### ☝️ Scope creep

### Who wins?
As said before, the goal is to get as many points as possible but not exceed 21 points. And the points are then compared between the dealer and each individual player. Whoever between the two that gets the closest to 21 points wins.
### ☝️ Scope creep

## Controls
The CLI will take input from the command line and the player will be choosing alternatives by numbers to navigate the game start/setup. The player will be choosing how many players that will join the game and the number of decks used in the game will be automatically assigned depending on this so that the game will contain a suitable number of cards and not run out of cards mid game.
### ☝️ On scope until here
 During game play the player will either write "Hit" or "Stand" to do the corresponding. During any point of the game the player will be able to either write "Exit" to chicken out of the game or write "Restart" to chicken out just a little bit in the hopes of having the next round going better.
 ### ☝️ Scope creep