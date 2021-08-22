// single parameter function

const doubleIt = n => n * 2;
console.log(doubleIt(5));

// without parameter function

const getName = () => 'samiul';
console.log(getName());

// multiple calculation function / big function

const doMath = (x, y) => {
    const sum = x + y;
    const multiply = x * y;
    const result = sum + multiply;
    return result;
}

console.log(doMath(5, 3));