const string = 'some test string';
console.log(string[0], string[string.length - 1]);

console.log(string[0].toUpperCase() + string.slice(1, string.length - 1) + string[string.length - 1].toUpperCase());

console.log(string.indexOf('string'));

console.log(string.indexOf(' ', string.indexOf(' ') + 1));

console.log(string.slice(5, 5 + 4));

console.log(string.substring(5,9));

console.log(string.slice(0, -6));

var a = 20;
var b = 16;

var c = a.toString()+b.toString()
console.log(a.toString()+b.toString());

console.log(typeof c);

var x = "Hello".concat(" Tproger");
console.log(x)