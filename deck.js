let card = require("./card.js");

exports.init = function () {
    var i = 0;
    var deck = [];
    for (var s = 0; s < card.suits().length; s++) {
        var suit = card.suits()[s];
        for (var v = 2; v <= 10; v++) {
            deck[i++] = card.getCard(v, suit);
        }
        deck[i++] = card.getCard('J', suit);
        deck[i++] = card.getCard('Q', suit);
        deck[i++] = card.getCard('K', suit);
        deck[i++] = card.getCard('A', suit);
    }

    return deck;
}

exports.toString = function (deck) {
    var cardlist = "";
    for (var i = 0; i < deck.cards.length; i++) {
        cardlist += card.toString(deck.cards[i]) + "\n";
    }
    return cardlist;
}

exports.getDeck = function () {
    return {
        cards: module.exports.init(),
        
        draw: function () {
            var index = Math.floor(Math.random() * this.size()) 
            return this.cards.splice(index, 1)[0]
        },

        size: function () {
            return this.cards.length
        }
    }    
}
