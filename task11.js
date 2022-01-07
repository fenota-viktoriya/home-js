//Итак, у нас есть число, например  const number = 123456789
//Нужно сделать из него массив - [1,2,3,4,5,6,7,8,9]
 
 let n = 123456789;
 const arr = [];

while (n) {
    arr.push(n % 10);
    n = Math.trunc(n/10);
}
console.log (arr.reverse(n));



 