import Card from './Card.js'

export default class Deck {
  constructor(decks) {
    this._faces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King', 'Ace']
    this._suits = ['clubs', 'spades', 'hearts', 'diamonds']
    this.cards = []

    // Loop over number of Decks to be initialized
    const tempDeck = []
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
          tempDeck.push(new Card(face, suit, value))
        }) 
      })
    }

    this.cards = this._shuffleDeck(tempDeck)
  }


  /**
   * Shuffling the deck of cards
   *
   * @param {Array} array to be shuffled
   * @return {Array} Shuffled version of the input array 
   * @memberof Deck
   */
  _shuffleDeck(array) {
    const tmpArr = [...array]
    // Using the fisher yates shuffle taken from StackOverflow
    // Taking the current card
    let currentIndex = tmpArr.length,  randomIndex

    while (currentIndex != 0) {
      // Picking a remaining card
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--

      // Swapping remaining card with current card
      [tmpArr[currentIndex], tmpArr[randomIndex]] = [tmpArr[randomIndex], tmpArr[currentIndex]]
    }

    return tmpArr
  }

  /**
   * Returning the top 10 cards of current deck
   *
   * @returns {Array} Return array of top 10 Card objects currently in the deck
   * @memberof Deck
   */
  getDeck() {
    return this.cards.slice(0, 10)
  }

  dealCard() {
    return this.cards.unshift()
  }
}