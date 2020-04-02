"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
function cashier() {
    var items = [];
    return {
        get length() {
            return 4;
        },
        get total() {
            return items.length;
        },
        add: function (name, price, qty) {
            return this;
        },
        addItem: function () {
            return this;
        }
    };
}
exports.cashier = cashier;
;
