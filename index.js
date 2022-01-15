const cats = ["Milo","Otis","Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
    return cats;
}

console.log("destructively append:",destructivelyAppendCat("babo cat"))

function destructivelyPrependCat(name) {
    cats.unshift(name)
    return cats;
}

console.log("destructively prepend:",destructivelyPrependCat("babo cat"))

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

console.log("destructively remove last:",destructivelyRemoveLastCat())

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}
console.log("destructively remove first:",destructivelyRemoveFirstCat())

cats.length=0
cats.push("Milo","Otis","Garfield");
console.log("NEW CATS LIST:",cats)

function appendCat(name) {
    const newCats = [...cats, name];
    return newCats;
}

console.log("append:",appendCat("biggest cat everr"))

function prependCat(name) {
    const newCats = [name, ...cats];
    return newCats;
}

console.log("prepend:",prependCat("biggest cat everr"))

function removeLastCat() {
    const newCats = cats.slice(0,-1);
    return newCats;
}

console.log("remove last:", removeLastCat())

function removeFirstCat() {
    const newCats = cats.slice(1);
    return newCats;
}

console.log("remove first:", removeFirstCat())
