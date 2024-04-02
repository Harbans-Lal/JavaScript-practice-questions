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