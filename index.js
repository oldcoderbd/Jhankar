// var name = "Rohim";
// var gender = "Male";
// var age = 29;
// var word = 5;
// var single = false;
// var son = true;
// var promise = "I love my beautiful country Bangladesh"

// // console.log(typeof age);
// // console.log(typeof gender);
// // console.log(typeof single);
// console.log(promise.split('love'));





// var num1 = "26.6";
// var num2 = 19;
// num1 = parseFloat(num1);
// num1 = parseInt(num1)
// console.log(num1 + num2);

// var num3 = 0.1;
// var num4 = 0.2;
// var sum = num3 + num4;
// // sum = sum.toFixed(1);
// console.log(sum.toFixed(1));

// var winner = 49.56 / 30;
// winner = Math.round(winner);
// console.log(winner);


// --------Grade Sheet---------

// var mark = 100;

// if(mark >100){
//     console.log("Kisu Ghapla ache")
// }
// else if(mark >= 90){
//     console.log("Tui Golden A+ paisos")
// }
// else if(mark >= 80){
//     console.log("Tui A+ paisos")
// }
// else if(mark >= 70){
//     console.log("Tui A paisos")
// }
// else if(mark >= 60){
//     console.log("Tui A- paisos")
// }
// else if(mark >= 50){
//     console.log("Tui B paisos")
// }
// else if(mark >= 40){
//     console.log("Tui C paisos")
// }
// else if(mark >= 33){
//     console.log("Tui D paisos")
// }
// else{
//     console.log("Tui Fail korsos")
// }

// --------Grade Sheet---------





// var fri = ["Ahsan", "Shawal", "Himel", "Harun"];

// for (var i = 0; i < fri.length; i++){
//     var gf = fri[i];
//     console.log(gf);
// }


// var namta = 3;

// for (i = 1; i <= 10; i++){
//     var namtaHolo = (`(${namta} x ${i})` = (namta * i));
//     console.log(namtaHolo);
// }



// function love(){
//     console.log("Hello baby");
//     console.log("Hello baby02");
//     console.log("Hello baby03");
// }
// love();


// function dubbleIt(num){
//     result = num * 2;
//     return result;
// }
// var one = dubbleIt(100);
// console.log(one);

// function inchToFeet(feet){
//     naniFeet = feet / 12;
//     return naniFeet;
// }
// var res = inchToFeet(300);
// console.log(res);
// var res2 = inchToFeet(500);
// console.log(res2);
// var res3 = inchToFeet(260);
// console.log(res3);




// function leapYear(year){
//     let leap = year % 4;
//     if (leap == 0){
//     return true;
// }
//     else{
//         return false;
//     }

// }
// let ck = leapYear(2027);
// if (ck == true){
//     console.log("is a leap year");
// }
// else{
//     console.log("not a leap year");
// }


//------Leap year check------
// function leap(year){
//     if((year % 400 == 0) || (year % 4 == 0) && (year % 100 !== 0)){
//         console.log(year + " is a leap year");
//     }
//     else{
//         console.log(year + " is not a leap year")
//     }
// }
// leap(2001);



// -----Factorial-----
// var factorial = 1;
// for(var i = 1; i <= 10; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

//------Factorial with function----------
function factorial(n){
    var factorial = 1;
    for(var i = 1; i <= n; i++){
        factorial = factorial * i;
    }
    return factorial;
}
var result = factorial(10);
console.log(result);