function add(n1, n2 = 25) {
    // n2 = n2 || 0;
    // if (n2 == undefined) {
    //     n2 = 0;
    // }
    const total = n1 + n2;
    return total;
}
console.log(add(15));

function fullName(fName, lName = 'Molla') {
    const name = fName + " " + lName;
    return name;
}
console.log(fullName('Samiul', 'Islam'));