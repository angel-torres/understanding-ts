interface IStack<T> {
    push(item: T): IStack<T>;
    push(items: T[]): IStack<T>;
    pop(): T | undefined;
    length(): number;
    print(): void;
}

interface IStackNode<T> {
    data: T;
    next: IStack<T>
}

class Stack<T> implements IStack<T> {
    private head: IStackNode<T> 

    push(item: T): IStack<T> {

    }

    push(items: T[]): IStack<T> {

    }

    pop(): T | undefined {

    }

    length(): number {
        let n = this.head;
        let l = 0;
        while(n) {
            l ++;
            console.log(n.data)
            n = n.next;
        }

        return l;
    }

    print(): void {
        let n = this.head;
        while(n) {
            console.log(n.data)
            n = n.next;
        }
    }

}
