// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let d = new Date();
console.log("\n Q11)")
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
let p = new Date('1970-01-01');
let e = (d - p);
console.log(e / 1000);
console.log('\n');
// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

let c = new Date();
let YY = d.getFullYear();
let MM = d.getMonth();
let DD = d.getDate();
let HH = d.getHours();
let mm = d.getMinutes();
console.log("Q12)")
console.log(`${YY}-${MM}-${DD} ${HH}:${mm}`);
console.log(`${DD}-${MM}-${YY} ${HH}:${mm}`);
console.log(`${DD}/${MM}/${YY} ${HH}:${mm}`);

// 13. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// ANSWER
let names= prompt("Enter your age");
let diff= 18-names;
if(names>=18){
    console.log("You are old enough to drive");
}
else{
    console.log(`wait for ${diff} years to drive`);
}

// 14. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? Create a program which checks that the given number is even or odd.

let num = 15;
console.log("\n");
console.log("Q14)");
if (num % 2 == 0) {
    console.log(num, "is an even number");
} else {
    console.log(num, "is an odd number");
}

// 15. Write a program which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

let marks = 81;
console.log("\n");
console.log("Q15) You have scored", marks, "marks and recieved the grade mentioned below:")
if (marks >= 80 && marks <= 100) {
    console.log("\t A");
} else if (marks >= 70 && marks <= 89) {
    console.log("\t B");
} else if (marks >= 60 && marks <= 69) {
    console.log("\t C");
} else if (marks >= 50 && marks <= 59) {
    console.log("\t B");
} else {
    console.log("\t F");
}

// 16. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

let mon = "May";
console.log("\n");
console.log("Q16)");
if (mon == "September" || mon == "October" || mon == "November") {
    console.log("Its Autumn season");
} else if (mon == "December" || mon == "January" || mon == "February") {
    console.log("Its Winter season");
} else if (mon == "March" || mon == "April" || mon == "May") {
    console.log("Its Spring season");
} else if (mon == "June" || mon == "July" || mon == "August") {
    console.log("Its Summer season");
} else {
    console.log("Invalid input");
}


// 17. Write a program which tells the number of days in a month.

let month = "September";
console.log("\n");
console.log("Q17)");
switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${month} has 31 days `);
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${month} has 30 days `);
        break;
    case "February":
        console.log(`${month} has 28/29 days `);
        break;

    default:
        console.log("Please enter a valid month name!");
}

// 18. Write a program which tells the number of days in a month, now consider leap year.

let monthh = "February";
let year = "2014";
console.log("\n");
console.log("Q18)");
switch (monthh) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        console.log(`${monthh} has 31 days `);
        break;
    case "April":
    case "June":
    case "September":
    case "November":
        console.log(`${monthh} has 30 days `);
        break;
    case "February":
        if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
            console.log(`${monthh} has 29 days in ${year}.`);
            break;
        } else {
            console.log(`${monthh} has 28 days in ${year}.`);
            break;
        }
        default:
            console.log("Please enter a valid month name!");
            break;
}

// 19. Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js


// 20. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of your shopping cart if it has not been already added
//     - remove 'Honey'
//     - modify Tea to 'Green Tea'
console.log("\n");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
(shoppingCart.unshift('Meat'));
console.log(shoppingCart);
(shoppingCart.pop());
console.log(shoppingCart);
(shoppingCart.push('Sugar'));
console.log(shoppingCart);
shoppingCart[3]= 'Green Tea';
console.log(shoppingCart);

