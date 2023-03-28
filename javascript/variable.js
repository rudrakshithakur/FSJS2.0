// 01. Create a variable.js file and declare variables and assign string, boolean,  undefined and null data types, Display all the value with their data type.
console.log("\n");
let var1 = "hello";
let var2 = true;
let var3;
let var4 = null;
console.log("Q1)", var1, "-", typeof (var1), " ", var2, "-", typeof (var2), " ", var3, "-", typeof (var3), " ", var4, "-", typeof (var4));
console.log("\n");

// 02. Declare variables to store your first name, last name, marital status,  country and age and display them using interploation method.

let firstname = "rudrakshi";
let lastname = "thakur";
let m_s = "Unmarried";
let country = "India";
let age = 22;
console.log(`Q2) firstname : ${firstname} Lastname: ${lastname}`);
console.log(`marital status : ${m_s} Country: ${country}`);
console.log(`age : ${age}`);
console.log("\n");

// 03. Declare a varibale and assign string value to it and change all the string characters to capital letters using toUpperCase() method.  

let s_var = "string";
console.log( "Q3)",s_var.toUpperCase());
console.log("\n");

// 04. Declare a varibale and assign string value to it and check if the string contains a word Script using includes() method.

let var5 = "Hello this is Script";
console.log("Q4)",var5.includes('Script'));
console.log("\n");

// 05. Declare a varibale and assign string value to it and then split it into an array using split() method.
let var6 = "happy";
console.log("Q5)",var6.split());
console.log("\n");

