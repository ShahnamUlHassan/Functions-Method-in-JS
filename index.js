                                        //functions & method in js
                                        // function call

// function myFunction(){
//     console.log("Hello World!");
//     console.log("We are learning JS");
// };
// myFunction();

                                       // parameter

// function myFunction(msg){
//     console.log(msg)
// };
// myFunction("I love JS");

// function sum(x , y){
//     s = x + y;
//     return s;
// }

// let val = (1 , 2);
// console.log(val);

                                      //Arrow function

// sum function
// function sum(a , b){
//     return a + b;
// }
// const arrowSum = (a , b) => {
// console.log(a + b)
// };

// mul function
// function mul(a , b){
//     return a * b;
// }
// const arrowMul =(a , b) =>{
//     console.log(a * b)
// };

// const printHello =() =>{
//     console.log("hello")
// }

                                       //Practice

// function countVowels(str){
//     let count = 0;
//     for (const char of str) {
//     if(
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u" 
//     ) {
//         count ++;
//     }
//     }
//     console.log(count);
// }                                       

                                     //forEach loop in arrays

// function abc(){
//     console.log("Hello");
// }
// function myFunction(abc){
//     return abc;
// };

// let arr = ["lahore" , "karachi" , "islamabad"];

// arr.forEach((val , idx , arr) => {
//     console.log(val.toUpperCase(), idx , arr);
// } )

                                       //Practice

// let num = [67 , 52 , 39]
// let calcSqaure = () => {
//     console.log(num  * num);
// }
// num.forEach(calcSqaure);

                                      //map

// let num = [67 , 52 , 39]
// let newArr = num.map((val) => {
//     return val * 2;
// });
// console.log(newArr);
// let calcSqaure = (num) => {
//     console.log(num * num);
// };

                                    //filter

// let arr = [1 , 2 , 3 , 4 , 5 , 6 ,7]
// let evenArr = arr.filter((val) => {
//     return val % 2 === 0;
// });
// console.log(evenArr);

                                   //reduce

// let arr = [2 , 5 , 3 , 7];

// const output = arr.reduce((prev , curr) => {
//     return prev > curr ? prev : curr;
// });
// console.log(output);

                                // Practice

// let marks = [99 , 87 , 92 , 94 , 65 , 56]

// let toppers = marks.filter((val) => {
//     return val > 90;
// });
// console.log(toppers);

// let n = prompt("enter a number:")
// let arr = [];
// for (let i = 1; i <= n; i++){
//     arr[i - 1] = 1;
// }

// console.log(arr);

// let sum = arr.reduce((res , curr ) => {
//     return res + curr;
// });

// console.log("sum =", sum)

// let factorial = arr.reduce((res , curr) => {
//     return res * curr;
// });

// console.log("factorial = " , factorial);