var moment = require('moment'); 
moment().format(); 

console.log("Hello!");

var datetime = moment().startOf("day").fromNow();
console.log(datetime);

var evens = [1, 2, 3];

var odds = evens.map(v => v + 1);
var nums = evens.map((v, i) => v + i);

var word1 = "testing";
var word2 = "123";
console.log(word1 + word2);
