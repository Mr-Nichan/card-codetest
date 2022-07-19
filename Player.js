export default class Player {
  constructor(name) {
    this.name = name
    this._hand = []
  }

  getName() {
    return this.name
  }

  getHand() {
    return this._hand
  }

  drawCard(card) {
    this._hand.push(card)
    return this._hand
  }

  getPoints() {
    // Loop through the cards and count points and number of aces
    let points = 0
    let aces = 0
    for (const card of this._hand) {
      // If ace is found, add one to aces counter and add 11 to points
      if (card.getValue === 11) {
        aces++
      }
      points += card.getValue
    }

    // If points exceeds 21 and there are aces on the hand subtract 10
    while (aces > 0 && points > 21) {
      aces--
      points -= 10
    }

    return points
  }
}