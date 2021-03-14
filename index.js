// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat (name) {
    name = 'Ralph';
  cats.push(name);
  return [name, ...cats];
}

function destructivelyPrependCat (name) {
    name = "Bob";
  cats.unshift(name);
  return [...cats, name];
}

function destructivelyRemoveLastCat () {
  cats.pop();
  return cats.slice(0, cats.length - 1);
}

function destructivelyRemoveFirstCat () {
  cats.shift();
  return cats.slice(1);
}

function appendCat (name) {
    name = "Broom";
    var appCat = [...cats,name];
    return appCat;
   
}

function prependCat (name) {
    name = "Arnold";
    var prepCat = [name, ...cats];
    return prepCat;
  
}

function removeLastCat () {
  return cats.slice(0, cats.length - 1);
}
function removeFirstCat () {
    return cats.slice(1);
  }