//28th Feb 2024

//Q1: Write a program that transforms a numerical grade to a letter grade (e.g grade 10 should display “A”).
//Sol: Using normal if-else

let grade = prompt("Enter your grades");
grade = Number.parseInt(grade);

if (grade <= 10){
    console.log("You got D grade and you should reappear the exam.");
}
else if (grade > 10 && grade <= 20){
    console.log("You got C grade and you should study more.");
}
else if (grade > 20 && grade <= 30){
    console.log("You got B grade and you are doing good.");
}
else {
    console.log("You got A grade and you are brilliant.");
}


//Q2: Write a program that calculates the ticket price based on age with the following conditions: age below 12 pay a ticket price of 5, age below 18 pay a ticket price of 10, age below 60 pay a ticket price of 20, age over 60 play a ticket price of 15.
//Sol: Ternary Operator

// let age = prompt("Enter your age");
// age = Number.parseInt(age);
// // let age = 90;
// let ticketFare = (age < 12)? console.log("Please Pay Rs 5.") : (age >= 12 && age < 18) ? console.log("Please pay 10 Rs") : (age >= 18 && age < 60) ? console.log("Please pay 20 rs") : console.log("Please pay 15 Rs");

//Q3: Using JavaScript switch statement to get the day of the week
//Sol: Switch Statement


let day = prompt("Enter the day number between 1 to 7");
day = parseInt(day);
switch (day) {
    case 1: 
        dayName = "Monday";
    break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Enter correct day";
}

console.log(dayName);


//Q4: Write a JavaScript program that displays the largest integer among two integers
//Sol: IF- Else


let int1 = prompt("Enter value 1");
int1 = parseInt(int1);
let int2 = prompt("Enter value 2");
int2 = parseInt(int2);

if (int1 < int2) {
    console.log(`${int1} is less than ${int2}`);
}
else if (int1 > int2) {
    console.log(`${int1} is greater than ${int2}`);
}
else {
    console.log(`${int1} and ${int2} are equal.`);
}


//Q5: Get the sum of two arrays…actually the sum of all their elements.
//P.S. Each array includes only integer numbers. Output is a number too.
//Sol: For Loop


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];

let sum1 = "";
sum1 = Number(sum1);
for (let i = 0; i < arr1.length; i++){
    sum1 += arr1[i];
}
let sum2 = "";
sum2 = Number(sum2);
for (let j = 0; j < arr2.length; j++){
    sum2 += arr2[j];
}
let totalsum = sum1 + sum2;

console.log(`${sum1} + ${sum2} = ${totalsum} `);

console.log(typeof totalsum);

