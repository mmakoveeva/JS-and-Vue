let string = "i am in the easycode";

for ( var a = 0; a = string.length - 1; a++){
    console.log(string.replace(/[a-zа-я]+/gi, (match) => match[0].toUpperCase()+match.substr(1)));
    break
}

let str = "tseb eht ma i";

let reverse = "";
for (let i = str.length - 1; i >= 0; i--) {
    console.log(str.split('').reverse().join(''));
    break
}




