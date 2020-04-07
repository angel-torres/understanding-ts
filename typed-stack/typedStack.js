var Stack = /** @class */ (function () {
    function Stack() {
    }
    // implementation not accessible directly
    Stack.prototype.push = function (itemOrArray) {
        var _this = this;
        if (itemOrArray instanceof Array) {
            itemOrArray.forEach(function (item) { return _this.push(item); });
        }
        else {
            var n = {
                data: itemOrArray,
                next: this.head
            };
            this.head = n;
        }
        return this;
    };
    Stack.prototype.pop = function () {
        var n = this.head;
        if (!n)
            return undefined;
        this.head = this.head.next;
        return n.data;
    };
    Stack.prototype.length = function () {
        var n = this.head;
        var l = 0;
        while (n) {
            l++;
            n = n.next;
        }
        return l;
    };
    Stack.prototype.print = function () {
        var n = this.head;
        while (n) {
            n = n.next;
        }
    };
    return Stack;
}());
var newStack = new Stack();
