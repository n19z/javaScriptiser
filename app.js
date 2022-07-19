// 1
let admin, name;
name = 'Джон';
admin = name;
alert(admin)

// 2
for (let i = 2; i <= 10; i = i + 2) {
   console.log(i);
}

// 3
let i = 2;
do {
    console.log(i);
    i = i + 2;
} while (i <=10)

// 4
let inputNum = 0;
while (inputNum < 100) {
    inputNum = prompt('Введите число > 100');
}

// 5 
let age = 13;
if ((age >= 14) && (age <= 90)) {
    console.log('Входит в диапазон от 14 до 90');
}

// 6
if ((age < 14) || (age > 90)) {
    console.log('Не входит в диапазон от 14 до 90');
}

// 7
if (!(age >= 14) && (age <= 90)) {
   console.log('Не входит в диапазон от 14 до 90');
}

// 8
let num = 0.322;
function makeNegative(num) {
    return num > 0 ? num * -1 : num;
  }
console.log(makeNegative(num));

// 9 
function isDivisible(n, x, y) {
    if ((n % x != 0) && (n % y != 0)) return `false because ${n} is neither divisible by ${x} nor ${y}`;
    if (n % x != 0) {
        return `false because  ${n} is not divisible by ${x}`;
    } else if (n % y != 0) {
        return `false because  ${n} is not divisible by ${y}`;
    } else {
        return `true because ${n} is divisible by ${x} and ${y}`;
    }
}
console.log(isDivisible(4, 2, 1));

// 10
function sum (numbers) {
    numbers[0] ? numbers.reduce((acc, curr) => acc + curr) : 0;
}

console.log(sum([1, 5.2, 4, 0, -1]));