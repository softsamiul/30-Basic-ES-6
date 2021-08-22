// Ways to declare function

//1

function add1(n1, n2) {
    return n1 + n2;
}
const add2 = function add2(n1, n2) {
    return n1 + n2;
}
const add3 = function(n1, n2) {
    return n1 + n2;
}

// arrow function
const add4 = (n1, n2) => n1 + n2;

console.log(add1(5, 5));
console.log(add2(5, 5));
console.log(add3(5, 5));
console.log('added from arrow fun', add4(5, 5));



const getFullName = (fName, lName = ' Islam') => fName + lName;

console.log(getFullName('Samiul'));