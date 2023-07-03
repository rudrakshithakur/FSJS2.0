// 21. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let country = ['india','Ethiopia','Australia','Srilanka'];
if (country.includes('Ethiopia')) {
    console.log('ETHIOPIA');
  } 
else {
   country.push('Ethiopia');
    console.log(country);
  }

//   22. The following is an array of 10 students ages:
//   => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//   - Sort the array and find the min and max age
//   - Find the median age(one middle item or two middle items divided by two)
//   - Find the average age(all items divided by number of items)
//   - Find the range of the ages(max minus min)
//   - Compare the value of (min - average) and (max - average), use abs() method


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log(ages[0]);
console.log(ages[ages.length-1]);

// average
let sum =0;
for(let i=0;i<ages.length;i++)
{
   
     sum = sum + ages[i];
}
let avg = sum /ages.length;
console.log(avg);

// median
let median=0;
let leng = ages.length;
if(leng%2==0){
    let mid1 = leng/2;
    let mid2 = leng/2-1;
   median = (ages[mid1]+ages[mid2])/2;
}
else{
    let mid = math.floor(leng/2);
    median = ages[mid];
}

console.log("Median:",median);

// range of ages
let maxage = ages[ages.length-1];
let minage = ages[0];
console.log((maxage-minage));

// use abs() method
console.log(Math.abs(maxage - minage));


// 23. Write a program to check that the number given by the user is a prime number or not.

// let num1 = prompt("enter a number");
// let primes = true;
// for(i=2;i<num1;i++){
//     if(num1%i===0)
// {
//     primes=false;
//     break;
// }
// }
// if(primes)
// {
//     console.log('it is a prime nummber');
// }
// else{
//     console.log('it is not a prime number');
// }

// 24. Write a program to create two array "even" and "odd" having even and odd number between the 0 to 100 (0 and 100 included)
let arr1=[];
let arr2=[];
for(i=0;i<=100;i++)
{
    if(i%2==0)
    {
        arr1.push(i);

    }
   else{
    arr2.push(i);
   }
}

console.log(arr1);
console.log(arr2);

// 25. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more

let weightkg = prompt('Enter your weight ');
let height = prompt('Enter your height ');

function bmi(w, h) {
    let bodymass = w/(h*h);
    return bodymass;
}

let b = bmi(parseInt(weightkg), parseInt(height));

if (b < 18.5) {
    console.log('Underweight');
} else if (b >= 18.5 && b <= 24.9) {
    console.log('Normal');
} else if (b >= 25 && b <= 29.9) {
    console.log('Overweight');
} else {
    console.log('Obese');
}

// 26. Write a program to print the table of any number given by the user. The format of the output should be smiliar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

let numb = 2;
for(i=1;i<=10;i++)
{
    console.log(numb,' * ',i,' = ',numb*i);
}

// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

for(let i=0;i<=100;i++)
{
  let flag = 0;
  for(let j=2;j<i;j++)
  {
    if(i%j==0){
    flag =1;
    break;
    }
  }
  if (i > 1 && flag == 0) {
    console.log(i);
}
}

// 28. Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let string = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";

  }
  string += "\n";

}
console.log(string);

// b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let s ='';
for(let i=1;i<=3;i++){
  for(let j=1; j <=3 ;j++){
    s+="*";
  }
  s+="\n";
}
console.log(s);

// c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
	  //    *
	  //   ***
 	  //  *****
let n=3;
let t ='';
for(let i=1;i<=n;i++)
{
  for(let j=1;j<=n-i;j++)
  {
    t+=" ";
  }
  for(k=0;k<=2*i-1;k++)
  {
  t+="*";
  }
  t+="\n";
}
console.log(t);



// 29. Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

let filename= prompt("Give me the filename");

let extension = filename.split('.').pop();

console.log(extension);



// 30. Create a simple calculator program in JavaScript which can perform the addition, substraction, multiplication and division on given numbers.


let num1=2;
let num2=3;

function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    return num1 / num2;
  }
  
  console.log('Addition',add(num1, num2));
  console.log('Subtraction',subtract(num1, num2));
  console.log('Multiplication',multiply(num1, num2));
  console.log('Division',divide(num1, num2));


