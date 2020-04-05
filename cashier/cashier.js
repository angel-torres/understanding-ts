"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function cashier() {
    var items = [];
    return {
        get length() {
            return items.length;
        },
        get total() {
            var total = items.reduce(function (accumulator, item) {
                return accumulator + (item.price * (item.qty || 1));
            }, 0);
            return total;
        },
        add: function (name, price, qty) {
            if (qty === void 0) { qty = 1; }
            var newItem = {
                name: name,
                price: price,
                qty: qty
            };
            items.push(newItem);
            return this;
        },
        addItem: function (item) {
            items.push(item);
            return this;
        }
    };
}
exports.cashier = cashier;
;
var cereal = {
    name: "Frosted Flakes",
    price: 2.99,
    qty: 2
};
console.log(cashier().addItem(cereal).total);
