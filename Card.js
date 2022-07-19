export default class Card {
  // Initializing the card object with its params
  constructor(face, suit, value) {
    this.face = face
    this.suit = suit
    this.value = value
  }
  
  // return a "visual" representation of the card
  getCard() {
    return [this.face, this.suit]
  }

  // return the actual value of the card
  getValue() {
    return this.value
  }

  toString() {
    return `${this.face} of ${this.suit}`
  }
}