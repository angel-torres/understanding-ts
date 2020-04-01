
// enum give you a group of related values that belong to a specific group
// when compiled to JavaScript they create an array of tuples e.g. [[0,1], [1,2]]
// this is beneficial because it gives us a more readable way of dealing with groups related things

enum Suit {
    Clubs, Diamonds, Hearts, Spades
}

enum CardNumber {
    Ace, Two, Three, Four, Five,
    Six, Seven, Eight, Nine, Ten,
    Jack, Queen, King
}

// this is an example of a tuple
// it looks like an array but we are able to define the order of specific things to hold
// in this case this tuple will hold two values
// the frist value belongs to the Suit enum and the second to CardNumber enum
type Card = [Suit, CardNumber]

function shuffleArray(a: Card[]) {
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
        return `${Suit[card[0]]} ${CardNumber[card[1]]}`;
    }

    readHand(cards: Card[]):void {
        for(let card of cards){
            console.log("card - ", newDealer.readCard(card));
        }
    }
}

const newDealer = new Dealer();

console.log(newDealer.getLength());
const hand1 = newDealer.dealHand(5) ;
newDealer.readHand(hand1);

console.log(newDealer.getLength());