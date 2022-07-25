// Write your solution here!
const cats  =  ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name)
}

function destructivelyPrependCat(name) {
    cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    cats.shift(name)
}

function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat;
    return cats;
}

function prependCat(name) {
    const prependCat = [name, ...cats];
    return prependCat;
    return cats;
}

function removeLastCat(name) {
    const removeLastCat = [...cats.slice(0, cats.length - 1)];
    return removeLastCat;
    return cats;
}

function removeFirstCat(name) {
    const removeFirstCat = [...cats.slice(1, cats.length)];
    return removeFirstCat;
    return cats;
}