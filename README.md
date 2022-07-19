# bld card-codetest

## Introduction
Setting up the project I first need to think about the choice of technology and then the CLI part. I'm thinking about picking Java or python for this since that lends itself very well to these types of applications. But I haven't coded in either Java nor Python in quite some time and the packaging to ease of use is e bit cumbersome compared to just using node.

Then I start thinking about how to make it as easy as possible to accept user input through a CLI and so I wont have to spend too much time building the interaction part of it all.

A quick google search and I find some promising libraries that are tried and true. Inquirer and Commander was the two most popular I found. I opted for using Inquirer even though it was not as popular (in terms of weekly downloads) since it looked simpler to get into in the time span of this challenge and I didn't need the additional bells and whistles that came with Commander.

## Game ON!

Now i need to pick what game to simulate in my CLI. I will choose BlackJack since it is a game that I have a fairly good understanding of and the logic is quite straight forward. The only thing I can think of now that might be a bit tedious to get right is the point counting since the Ace can be both valued as 1 or 11.

## Blueprinting comes first

I need to think about what classes the project should consist of. this way I wont have to circle back and rewrite as much if I have a clear game-plan (no pun intended). To be able to play we need Players, the "house" is a player too, and we need a deck of cards which of course consist of a number of individual cards.

Building classes for these three parts would be a good start. Then comes thinking about methods to be created in these classes to create the behavior we need in this game.

### Player
The Player object needs to be initialized with a name, type of player (human/house), an empty hand, how much money being brought to the table and something to store the total current value of the hand.

### Deck
The Deck object needs to be able to initialize ie. create the cards with the correct number and values of cards. It then needs to be able to shuffle the cards. Lastly it needs to be able to deal a card to whomever requests a card.

### Card
The Card object should only need to be initialized with a value, a face and a suit. I feel listing the reading of the value a bit redundant..