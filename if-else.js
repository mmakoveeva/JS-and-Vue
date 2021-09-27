let value = 'hidden';
if (value ==='hidden'){
    value = 'visible';
} else {value = 'hidden';}
console.log(value);

let a = 2;

switch (true) {
    case 0: a = 1;
    break;
    case a < 0: a = "less then zero";
    break;
    case a > 0: a *= 10;
}

console.log(a);

let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };

if (car.age > 5){
    console.log('Need Repair');
    car.needRepair = true;
}else {
    car.needRepair = false;
}


let item = { name: 'Intel core i7', price: '100$', discount: "15%"};

if (item.discount !== undefined && item.price !== undefined){
    item.priceWithDiscount = parseInt(item.price) * (100 - parseInt(item.discount))/100;
    console.log(item.priceWithDiscount);
}else {
    console.log(item.price);
}

let product = {
    name: 'Яблоко',
    price: '10$'
};

let min = 10; // минимальная цена
let max = 20; // максимальная цена

if (parseInt(product.price) >= min && parseInt(product.price) <= max){
    console.log(product.name);
}else {
    console.log("Товар не найден");
}

