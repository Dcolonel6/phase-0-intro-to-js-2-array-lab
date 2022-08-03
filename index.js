// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push(name) ;   
    return cats;
}
function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
function destructivelyRemoveLastCat(){
    return cats.pop();
}
function destructivelyRemoveFirstCat(){
    return cats.shift()
}
function appendCat(name){
    return [...cats,name];
}
function prependCat(name){
    return [name, ...cats.slice(0)];
}
function removeLastCat(){
    return cats.slice(0,-1);

}
function removeFirstCat(){
    return cats.slice(1);
}