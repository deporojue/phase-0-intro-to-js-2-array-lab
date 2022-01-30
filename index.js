const cats = ["Milo", "Otis", "Garfield"];


function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

//console.log(destructivelyAppendCat("NEW CAT"));

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

//console.log(destructivelyPrependCat("NEW CAT"));

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

//console.log(destructivelyRemoveLastCat())

function  destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

// console.log(destructivelyRemoveFirstCat());

function appendCat(name) {
    return [...cats, name]
}

// console.log(appendCat("NEWER CAT"))
// console.log("original:",cats)

function prependCat(name) {
    return [name, ...cats]
}

function removeLastCat() {
    return cats.slice(0,-1)
}

// console.log(removeLastCat())
// console.log("original:",cats)

function removeFirstCat() {
    return cats.slice(1)
}
