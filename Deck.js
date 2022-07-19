import Card from './Card'

class Deck {
  constructor(decks) {
    this._faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    this._suits = ['clubs', 'spades', 'hearts', 'diamonds']
    this.cards = []

    // Loop over number of Decks to be initialized
    for (let i = 0; i < decks; i++) {
      // loop over each face
      this._faces.forEach(face => {
        let value
       
        if (typeof face === 'number') { // Set value to face value if type is number
          value = face
        } else if (face === 'Ace') { // Set value to 11 if face is Ace
          value = 11
        } else { // otherwise use value 10 for Jack, Queen and King
          value = 10
        }

        // Loop over each suit
        this._suits.forEach(suit => {
          // Push new card with configuration to deck
          this.cards.push(new Card(face, suit, value))
        }) 
      })
    }

    this._shuffleDeck()
  }

  _shuffleDeck() {}

  dealCard() {}
}