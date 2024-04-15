//this refer to the current value of the object>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>.
//"this" change its value according how you call the execution context of the it>>>>>>>>>


//inside obj it refer to the window object>>>>>>>>>>>>>>>>>

let obj3 = {
    key:this
}
console.log(obj3.key);

// fucntio inside the obj its this refer to the that obj>>>>>>>>>>>>>>>>>>.
let obj ={
    name:"hello",
    fun2:function(){
        console.log(this.name);
    }
}

obj.fun2();

//with new keyword or the constructor it refer to the instance of that constructor >>>>>>>>>>>
class Car{
    constructor(color, brand){
        this.color = color;
        this.brand = brand;
    }
   getDetail(){
    console.log(`the car color is: ${this.color} and brand is : ${this.brand}`);
   }
}

let objj = new Car("black", "bmw");
objj.getDetail();


// this inside the normal function refer tot the window object >>>>>>>>>>>>>>>>>>>>>>>>
var a = 10;
function fun3(){
    var a = 20;
    console.log(this.a);
}
fun3()

//this inside the arrow function >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




/* this inside the arrow function behave quite differently ... our arrow function dont have their on this 
    so it borrrow the this property from its lexical scope
*/


function fun4(){
    let fun5 = ()=>{
        console.log(this); // this refer to the window here because its parents this also refers to window
    }
    fun5();
}
fun4();


// Arrow function is a concise way to write the our anonymous function or traditional function .>>>>>>>>>>
//arrow funciton inherit its this from its parent>>>>>>>>>>>>>



let obj4 = {
    name:"something",
    outer: function(){
        console.log(this);

        let inner = ()=>{
            console.log(this);
        }
        inner();
    }

}
obj4.outer();

//inside arrow function we can pas the defalut parameter, destructuring and also spread value......

//(a,b,...c)=>  ...................
//(a=10, b=20)=>  ......................
//([a,b,c] = [10,20,30])=> ....................
//({a,b}= {hello:"world",age:20})



/* this in function contexts
The value of the this parameter depends on how the function is called, not on how it's defined.*/

// insdie function usine call , appy, bind method we can manipulate or set the this value>>>>>>>>>>>>>>>>>>>

function fun8(name){
    console.log(`name is : ${name} and role is: ${this.role}`);
}
let newobj = {role:"developer", exp:5};

fun8.call(newobj.role, "Someone") // in call context first argument take the this refernce other witll take the function agrument
fun8.apply(newobj.role , ["Nobody"])// in appy bind it is same as call but it will take the function agrument in an array form..
let useLater = fun8.bind(newobj) // in bind we bind our funcntion with this reference only and use later
useLater("okay")


let number = 276;
let ans  = 0;
let arr = [];
while(number!=0){
    let digit = number % 10;
    arr.unshift(digit);
    ans = (ans*10) + digit;
    number = Math.floor(number / 10);
}


//remove duplicate without using inbuilt method...................

let numbers = [1,1,2,2,5,88,true, true , 88,9];
let unique = [];

for(let i=0;i<numbers.length; i++){
    let duplicate = false;
    for(let j=0; j<unique.length;j++){
        if(numbers[i]===unique[j]){
            duplicate =  true;
            break;
        }
    }
    if(!duplicate){
        unique.push(numbers[i]);
    }
}
console.log(unique);


//pageFinder ... we have ten record on one page and so on and i want to find the page when enter the record number..suppose if i type 17 then page two should be display and so on or if i type any record between 1 to 10 it should give me page 1 .


// let record = prompt('enter the record number');

function pageFinder(rec){
    let num = +rec;
    return Math.ceil(num/10);
}

let res = pageFinder(55);
console.log(res);


//Cout the repetation of the string or sentece.....eg.hell here h=1 2=1 and l = 2 .>>>>>>>>.

let str = "this is some string";
let count = {};

for(let val of str){
    count[val] = (count[val]||0)+1;
}
console.log(count);

//we have givin array and find the max gap b/w two nubmer whish has the  most gap......eg..arr = [1,2,5,9,10,5]here 10 and 5 has most gap i.e 15.....

let arr4 = [1,2,5,9,10,5];
let store = [];
let num = 1;
for(let i=0; i<arr4.length-1; i++){
    store.push(arr4[num]-arr4[i]);
    num++;
}
console.log(Math.max(...store));

// Givin an array fo intergets replace every elemtnt by its frequency in the array.
//INput:
//1 2 5 2 2 5 >>>>>> output should be >.> 1 3 2 3 3 2 

let arr5 = [1,2,5,2,2,5];
let counting = [];
for(let val of arr5){
    let counti = 0;

    for(let val2 of arr5)
    if(val===val2){
        counti++;
    }
    counting.push(counti)
}
console.log('original array is ', arr5);
console.log('frequecy in  array is ', counting);


//Check wheatehr a string can become empty by repeadtdely deleeting a given sub-stirng 
//Giving a stirng s1 and another string s2, find whether s1 can ecome empty by deleting s2 from s1 again and agian .You are allowed to delte s2 from s1 any number of time 
//Input:
//>> cocodede
//>>code
//where :
// first line represents string s1 
// second linde represents string s2

// output:
// Yes

let s1 = "cocodede";
let s2 = "code";

while(s1.includes(s2)){
    s1 = s1.replace(s2,"");
}
if(s1.length === 0){
    console.log('Yes');
}else{
    console.log('No');
}

// Count the pairs in an array that hold A[i]+ A[j] = i+j
// Given an array A of N integers, count all the pairs(A[i],A[j]) such that i + j = A[i]+A[j] for all 0 <=i <j<N
// Input:
// 10
// 8 4 2 1 5 4 2 1 2 3
// where:
// First line represents the number of elements in the array.
// Second line represents the elements of the array.
// Output:
// 1

let arr6 = [0,1,2,1,5,4,2,1,2,3];
let count2= 0;
for(let i=0;i<=arr6.length-1; i++){
    for(let j=i+1;j<=arr6.length-1;j++){
        if(i+j == arr6[i]+ arr6[j]){
            // console.log("i is:",i, "j is : ", j, "arr[i]is: ", arr6[i], "arr[j] is: ", arr6[j]);
            count2++;
        }
    }
}

console.log('>>>>>>>', count2);

//Count occurences of word in a givien string 
//Input:
// Hello World Hello
// Hello

// output:
// 2

function occurencesWord(str,word){
    let count = 0;
    str.split(" ").map(val => val=== word?count++:count);
    return count
}

let result = occurencesWord("Hello World Hello", "Hello");
console.log(result);


// Check whether a string is Isogram  or Notification
// Given a string SVGAElement, find whether it is Isogram or Notification.apply
// Input:
// Machine

// where:
// first line represts string S
// Output:
// Yes
// explaination: "Machine" does not have any repeating , it is an Isogram


function checkIsogram(str){
    let strr = str.toLocaleLowerCase();
    let count = 0;
    for(let i=0; i<strr.length; i++){
        for(let j=i+1; j<strr.length; j++){
            if(strr[i]===strr[j]){
                count++;
            }
        }
    }

    if(count>0){
        console.log("it is not isogram");
    }else{
        console.log("Yes it is isogram");
    }
}
checkIsogram("Machine")

// second method for the same>>>>>>>>>>>>>>>>>>>>>>>>>>>.....

let strrr = "MachiMe";
let isIsogram = true ;

for(let i=0; i<strrr.length;i++){
   if(strrr.indexOf(strrr[i]) !== strrr.lastIndexOf(strrr[i])){
    isIsogram = false;
    break;
   }
}
console.log(isIsogram);


// Display all the leap years in a speific range 
// Given a year N , display all the leap years from 1 to N.
// INput:
// 50
// where:
// First line reorest the value of N.
// Output:
// 4 8 12  16 20 14 18 32  36 40 44 48 

// Assumptions:
// N can be in the range to 3000

function cheakLeapYear(range){
    let arr = [];
    let rangeIs  = range;
    for(i=1; i<=range; i++){
        if(i%4===0|| i%100===0|| i%400 === 0){
            arr.push(i);
        }
    }
    return [arr,rangeIs];
}
let [yearsAre, rangeIs] = cheakLeapYear(100);
console.log(`the range is ${rangeIs} and the leap years are ${yearsAre}`);


// Count number of distinct pairs in the array whose sum exists in the given array: given an array A of N positive intefets , find the numver of distict pairs (A[i],[A[j]]) whose sum eits in the given array fro all 0 <= i < j < N.
// Note: While repeating pairs will not be counted again. And we cannot make a pair using the same elements again eg: (2,1) and (1,2) will e considered as only one pair.
// Input:
// 7
// 1 5 6 4 -1 5 10

// where :
// First line represts the number of elemmts in the array
// Second linde represnts the elements in the array.

let arr2 = [1 ,6,5 ,4 ,-1,5,10];
function countDistinctPair(arr){
    let count = 0;
    let unique = new Set();
    console.log(arr);
    for(let i =0; i<arr.length;i++){
        for(let j = i+1;j<arr.length; j++){
            let val = arr[i]+arr[j];
            if(arr.includes(val)){
                count++;
                console.log(`${arr[i]}${arr[j]}`);
                unique.add(`${arr[i]}${arr[j]}`);
            }
        }   
    }
    console.log([...unique]);
    return count;
}
console.log(countDistinctPair(arr2));


//Find the prime number in an Array>>>>>>>>>>>>>>>>>>>>>>>>>>>>
let arr7 = [1,2,3,5,7,8,9,10,11,12,13,14,15,16,17];

function isPrime(arr){
    let primeArr = [];
    for(let val of arr){
        let prme =  true;
        for(let i=2; i<val; i++){
            if(val%i ===0){
                prme = false;
            }
        }
        if(prme){
            primeArr.push(val);
        }
    }
    return primeArr
}
console.log(isPrime(arr7))

//Remove duplicate from the string >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let str2 = "Hello Wrold";
let str3 = [...new Set(str2)];
console.log(str3.join(""));

// second method to remove duplicate from the String>>>>>>>>>>>>

let uniqueStr = "";
for(let i=0; i< str2.length; i++){
    if(!uniqueStr.includes(str2[i])){
        uniqueStr += str2[i];
    }
}
console.log("uniqueString is:>>", uniqueStr);

let uniqueStr1 = "";
for(let val of str2){
    if(!uniqueStr1.includes(val)){
        uniqueStr1 += val;
    }
}
console.log(uniqueStr1);

//Find the array of sum and there half is in the array or not eg.>>>> arr is 1 , 2 , 3  in this case 1 + 2 + 3 = 6 and there half is 3 and 3 is in the array so output should be yes.

let arr8 = [1,2,3,4,5];
let half = arr8.reduce((acc, val) => acc + val/2,0);
if(arr8.includes(half)){
    console.log("Yes");
}else{
    console.log("It is not in the array");
}

//check a number is palindrom or not>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function numberIsPalin(num){
    let nummm = num;
    let reverse  = "";
    while(num != 0){
      let  digit  = num%10;
        reverse = (reverse*10)+digit;
        num = Math.floor(num / 10);
    }
   console.log(nummm === reverse);
}

// Replace every element of the array with the greatest elemtnson its left isde :
// Note: Replace the first element with -1 as it has no elemtn in its left
// Input:
// 6
// 4 5 2 1 7 6
// where:
// First line represents the number of elements in the Array.
// Second line represents the elements  in the arry:
// Output:
// -1 4 5 5 5 7 

let arr9 = [4 , 5 , 2 , 1 , 7 , 6];
let opArr =[];

for(i=0; i<arr9.length-1; i++){
    opArr[0] = -1;
    let great = Number.MIN_SAFE_INTEGER;
    for(let j=0; j<=i; j++){
        if(arr9[j]>great){
            great = arr9[j]
            
        }
    }
    opArr.push(great)
}

console.log(opArr);
console.log(arr9);

//Number of Substring divisible by 6
// Givin a string S consisting of integers 0 to 9  , find the number of substrngs which are divisble by 6 , substrng does not contain leadin Zerros.
// Input:
// 606
// output:
// 5
// explainaiotn:
//  substring: "6" , "0" ,"6",  "60", "606" are divisible by 6

let str4 = "606";
let arr10 = [];
for(let i=0; i<str4.length; i++){
    arr10.push(str4[i])
}
console.log("later work",arr10);

// Check wheatehr a strin is suffix of another 
// Given two strings s1 and s2 check wheatehr s1 is a suffix of s2 ie check wheather string s2 ends with string s1.
// input :
// code 
// coderscode
// output:
// Yes

function suffixStr(s1, s2){
    let s2Len = s2.length-1;
    let empStr1 = "";
    let empStr2 = "";

    for(i=s1.length-1; i>=0; i--){
        empStr1 += s1[i];
        empStr2 += s2[s2Len];
        s2Len -- ;
    }
   
   if(empStr1 === empStr2){
    console.log("yes");
   }else{
    console.log("NO");
   }

}
console.log(suffixStr("code","coderscode"));

//Count array elements that divide sum of all other element:>>>>>>>>>>>>>>>>>>>>>>>>>

let arr11 = [ 3,10,4,6,7];
let divisible = 0;
for(let val of arr11){
    let sum = 0;

    for(let i=0; i<arr11.length; i++){
        if(arr11[i]!== val){
            sum += arr11[i];
        }
    }
    if(sum % val===0){
        divisible++;
    }
}
console.log(divisible);

