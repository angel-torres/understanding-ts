
enum Suit {
    Clubs, Diamonds, Hearts, Spades
}

enum CardNumber {
    Ace, Two, Three, Four, Five,
    Six, Seven, Eight, Nine, Ten,
    Jack, Queen, King
}

type Card = [Suit, CardNumber]

function shuffleArray(a: any[]) {
    // Iterate over the array
    for (let i = a.length; i; i--) {
      // Get next index
      let j = Math.floor(Math.random() * i);
      // Swap positions
      [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function createDeck(): Card[] {
    const cards: Card[] = [];

    for(let s = 0; s < Object.keys(Suit).length; s += 2){
        for(let n = 0; n < Object.keys(CardNumber).length; n += 2){
            cards.push([s/2, n/2])
        };
    };

    return cards
};

export class Dealer {
    cards: Card[] = []; 

    constructor() {
        this.cards = createDeck();
        shuffleArray(this.cards)
    };

    // deals five cards
    dealHand(numberOfCards: number):Card[] {
        return this.cards.splice(this.getLength() - numberOfCards, numberOfCards)
    };

    // gives how many cards are left in deck
    getLength():number { 
        return this.cards.length
    };

    readCard(card: Card):string {

        return '';
    }

}

const newDealer = new Dealer();

console.log(newDealer.getLength());
console.log(newDealer.dealHand(5));
console.log(newDealer.getLength());