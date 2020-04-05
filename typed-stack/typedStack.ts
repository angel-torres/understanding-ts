
interface IStack<T> {
    push(item: T): IStack<T>;
    push(items: T[]): IStack<T>;
    pop(): T | undefined;
    length(): number;
    print(): void;
}

function TypedStack() {


}
