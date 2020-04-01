"use strict";
// enum give you a group of related values that belong to a specific group
// when compiled to JavaScript they create an array of tuples e.g. [[0,1], [1,2]]
// this is beneficial because it gives us a more readable way of dealing with groups related things
Object.defineProperty(exports, "__esModule", { value: true });
var Suit;
(function (Suit) {
    Suit[Suit["Clubs"] = 0] = "Clubs";
    Suit[Suit["Diamonds"] = 1] = "Diamonds";
    Suit[Suit["Hearts"] = 2] = "Hearts";
    Suit[Suit["Spades"] = 3] = "Spades";
})(Suit || (Suit = {}));
var CardNumber;
(function (CardNumber) {
    CardNumber[CardNumber["Ace"] = 0] = "Ace";
    CardNumber[CardNumber["Two"] = 1] = "Two";
    CardNumber[CardNumber["Three"] = 2] = "Three";
    CardNumber[CardNumber["Four"] = 3] = "Four";
    CardNumber[CardNumber["Five"] = 4] = "Five";
    CardNumber[CardNumber["Six"] = 5] = "Six";
    CardNumber[CardNumber["Seven"] = 6] = "Seven";
    CardNumber[CardNumber["Eight"] = 7] = "Eight";
    CardNumber[CardNumber["Nine"] = 8] = "Nine";
    CardNumber[CardNumber["Ten"] = 9] = "Ten";
    CardNumber[CardNumber["Jack"] = 10] = "Jack";
    CardNumber[CardNumber["Queen"] = 11] = "Queen";
    CardNumber[CardNumber["King"] = 12] = "King";
})(CardNumber || (CardNumber = {}));
function shuffleArray(a) {
    var _a;
    // Iterate over the array
    for (var i = a.length; i; i--) {
        // Get next index
        var j = Math.floor(Math.random() * i);
        // Swap positions
        _a = [a[j], a[i - 1]], a[i - 1] = _a[0], a[j] = _a[1];
    }
}
function createDeck() {
    var cards = [];
    for (var s = 0; s < Object.keys(Suit).length; s += 2) {
        for (var n = 0; n < Object.keys(CardNumber).length; n += 2) {
            cards.push([s / 2, n / 2]);
        }
        ;
    }
    ;
    return cards;
}
;
var Dealer = /** @class */ (function () {
    function Dealer() {
        this.cards = [];
        this.cards = createDeck();
        shuffleArray(this.cards);
    }
    ;
    // deals five cards
    Dealer.prototype.dealHand = function (numberOfCards) {
        return this.cards.splice(this.getLength() - numberOfCards, numberOfCards);
    };
    ;
    // gives how many cards are left in deck
    Dealer.prototype.getLength = function () {
        return this.cards.length;
    };
    ;
    Dealer.prototype.readCard = function (card) {
        return Suit[card[0]] + " " + CardNumber[card[1]];
    };
    Dealer.prototype.readHand = function (cards) {
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            console.log("card - ", newDealer.readCard(card));
        }
    };
    return Dealer;
}());
exports.Dealer = Dealer;
var newDealer = new Dealer();
console.log(newDealer.getLength());
var hand1 = newDealer.dealHand(5);
newDealer.readHand(hand1);
console.log(newDealer.getLength());
