  
interface CartItem {name: string, price: number, qty: number};

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
            return 4
        },
        get total():number {
            return items.length
        },
        add(name: string, price: number, qty?: number):CartAPI {
            return this
        },
        addItem():CartAPI {
            return this
        }
    }

};

