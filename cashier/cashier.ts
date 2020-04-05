  
interface CartItem {name: string, price: number, qty?: number};

interface CartAPI {
  length: number;
  total: number;
  add(name: string, price: number, qty?: number): CartAPI;
  addItem(item: CartItem): CartAPI;
}

export function cashier(): CartAPI {
    const items: CartItem[] = [];

    return {
        get length():number {
            return items.length
        },
        get total():number {
            const total = items.reduce((accumulator, item) => {
                return accumulator + (item.price * (item.qty || 1))
            }, 0);
            return total;
        },
        add(name: string, price: number, qty: number = 1):CartAPI {
            const newItem: CartItem = {
                name,
                price,
                qty
            };
            items.push(newItem);
            return this;
        },
        addItem(item):CartAPI {
            items.push(item)
            return this
        }
    }

};

const cereal = {
    name: "Frosted Flakes",
    price: 2.99,
    qty: 2
}

console.log(cashier().addItem(cereal).total)