export function* getFibSequence(): IterableIterator<number> {
    let twoAgo = 1; // 0  1
    let oneAgo = 0; // 1  1
    while(true) {
      let nextValue = twoAgo + oneAgo;
      yield nextValue;
      twoAgo = oneAgo;
      oneAgo = nextValue;
    }
  }

const fibGenerator = getFibSequence();

console.log(fibGenerator.next())
console.log(fibGenerator.next())
console.log(fibGenerator.next())
