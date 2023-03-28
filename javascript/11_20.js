// 11. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d);
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
let p = new Date('1970-01-01');
let e =(d-p);
console.log(e/1000);
console.log('\n');
// 12. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

