// let input = require("readline-sync");
// let N = input.questionInt("ENter N:");
// if(N%2 === 0) {
//     console.log("Even");

// }else{
//     console.log("Odd")
// // }

// let input = require("readline-sync");
// let age = input.questionInt("ENter age:");
// if (age>=18){
//     console.log("eligible")
// }else{
//     console.log("Not eligible");
// }


// let input = require("readline-sync");
// let N = input.questionInt("ENter N:");
// let M = input.questionInt("ENter M:");
// let P = input.questionInt("ENter P:");

// if (N >= M && N >= P) {
//     console.log(N, "is largest");
// } else if (M >= N && M >= P) {
//     console.log(M, "is largest");
// } else {
//     console.log(P, "is largest");
// }

// let name = prompt(" What is your Name:");
// let age = prompt("What is your age");
// let marks = prompt("Your marks");


// if (age>= 18){
//     alert("Eligible")
// }else{
//     alert("not aligible")
// }


// if (marks >=90){
//     alert("Grade A");
// } else if (marks >= 80){
//     alert("Grade B");
// }else if(marks>70){
//     alert("Grade C");
// } else{
//     alert("Fail")
// }


// if(age>=18){
//     alert("Adult");
// } else{
//     alert("child")
// }

// let name = prompt("Enter you name");
// let welcome = prompt("Welcome, " + name +" You are lost in jungle");
// let health = 100;
// let score = 0;

// let choice = "Choose an option \n 1.Search Food\n2.Explore\n3.Rest";

//  if(choice ===1) {
//     health+=10;
//     score+=10
//     alert("You found food your "+health+score+"increases");
//  } else if()

// let marks  = [1,2,3,4];
// let result = marks.map(n=>n*n)
// console.log(result);
// let marks = [1,2,3,4];
// let result = marks.map(n=>n*2);
// console.log(result);

// let numbers = [1,2,3,4];
// let even = numbers.filter(n=> n%2===0);
// console.log(even);

// let numbers = [30,80,45,90];
// let pass = numbers.filter(n=> n>=50);
// console.log(pass);

// let numbers = [1,2,3,4];
// let sum = numbers.reduce((acc,curr) => acc+curr,0);
// console.log(sum);

// let numbers = [10,20,30];
// let sum = numbers.reduce((i,j)=> i+j,0);
// console.log(sum);

// let numbers = [1,2,3];
// numbers,forEach(n=> {
//    console.log(n);
// })

// let num = ["a","b","c"];
// num.forEach(n=> {
//    console.log(n);
// })


// let playerName = prompt("Enter your Name:");
// let health = 100;
// let score = 0;

// let show = alert("Welcome!, " + playerName+" You are lost in a jungle");

// function randomEvents() {
//    let event = Math.random(Math.floor)*3;

// if(event ===0) {
//    alert("Snake attack on You ");
//    health-=20;

// }else if (event ===1) {
//    alert("Wow You found Water..")
//    health+=20
// }else{
//    alert("nothing happend");
// }
// }

// function firstDecision() {
// let choice = prompt("")
// }

// let arr=[1,2,3,4,5,6];
// arr.splice(2,3);
// console.log(arr)

//  let s = new  Set([1,2,2,3,3,4]);
//  console.log(s.add(5));
//  console.log(s);

// let m = new Map();
// m.set("name","Raj");
// m.set(1,"number key");
// console.log(m.get("name"));

// let obj = {};
// let m = new Map();

// let key1 = {id: 1};
// let key2 = {id: 1};

// // Object
// obj[key1] = "Object Value";

// // Map
// m.set(key1, "Map Value");

// console.log(obj[key2]);
// console.log(m.get(key2));
// let m = new Map();
// m.set("name","rajni");
// m.set("age",18);
// m.set("city","Punjab");

// console.log(m.get("name"));

// let key = {id:1};

// let m = new Map();
// m.set(key, "hello");

// console.log(m.get({id:1}));

// const myself = {
// "name":"rajni",
// "age":20
// }
// console.log(myself["name"]);

// let obj = {a:16};
// let key = "a";
// console.log(obj.key);
// console.log(obj[key]);
// let user = {
//     name:"rajni"
// };
// user.age = 20;
// user["city"] = "delhi";
// console.log(user)

// let num = "100px";
// num = parseInt("100px");
// console.log(num);

// let n = (12.987);
// console.log(n.toFixed(2));
// let n = "1 2 3";
// console.log(isNaN(n));

// let name = "Rajni";
// console.log(`hello ${name}`);
// let now = new Date();
// console.log(now);

// let d = new Date();
// console.log(d.getFullYear()); 
// console.log(d.getMonth());    

// let d= new Date();
// // console.log(d.getFullYear());
// console.log(d.getMonth);\

// let input = document.createElement("input");
// input.type = "text";
// input.style.margin = "10px";
// input.placeholder = "enter something";
// document.body.appendChild(input);

// let input_1= document.createElement("input");
// input.type ="text";
// input.style.margin = "10px";
// input_1.placeholder = "eneter digit";
// document.body.appendChild(input_1);

// let add = document.createElement("button");
// add.textContent = "ADD";
// add.style.margin = "20px";
// document.body.appendChild(add);

// let sub = document.createElement("button");
// sub.textContent = "Sub";
// sub.style.margin = "20px";
// document.body.appendChild(sub);

// let mul = document.createElement("button");
// mul.textContent = "Mul";
// mul.style.margin = "20px";
// document.body.appendChild(mul);

// let div= document.createElement("button");
// div.textContent = "div";
// div.style.margin = "20px";
// document.body.appendChild(div);

// let p = document.createElement("p");
// document.body.appendChild(p);


// add.onclick = function() {
//     value_1 = Number(input.value);
//       value_2 = Number(input_1.value);
//       p.textContent = value_1 +value_2;
// }

// sub.onclick = function() {
//     value_1 = Number(input.value);
//       value_2 = Number(input_1.value);
//       p.textContent = value_1 - value_2;
// }

// mul.onclick = function() {
//     value_1 = Number(input.value);
//       value_2 = Number(input_1.value);
//       p.textContent = value_1 * value_2;
// }

// div.onclick = function() {
//     value_1 = Number(input.value);
//       value_2 = Number(input_1.value);
//       p.textContent = value_1 % value_2;
// }


// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let para = document.getElementById("para");

//    let value = input.value;
//     let arr = value.split(",").map(Number);
//     let total = arr.reduce((i,j)=>i+j,0);

//     para.textContent = total;

// function getSum(value){

// }

// let box = document.getElementById("box");
// let output = document.getElementById("output");

// box.addEventListener("change", function() {
//     output.innerText = box.value;
// });
// let p = new Promise((resolve,reject)=> {
//     setTimeout(()=>{
//         console.log("hello");
//         resolve();
//     },1000);

// })
// .then(()=>{
//     return new Promise((resolve)=> {
//         setTimeout(()=> {
//             console.log("Done");
//             resolve();
//         },1000);
//     });
// });\
// let msg = new Promise((resolve,reject)=> {
// let success = true;
// setTimeout(()=> {
//     if (success) {
//         resolve("Hello Raj");
//     } else{
//         reject("Something Went Wrong");
//     }
// },2000)

// });
// msg
// .then((resolve)=> {
//     console.log(resolve)
// })
// .catch((err)=>{
//     console.log(err);
// })
//  function delay(msg,time){
// return new Promise ((resolve)=> {
//     setTimeout(()=> {
//         console.log(msg);
//         resolve();
//     },time)
// });

//  }
//  delay("Fetching data...",1000)
// .then(()=>{
//     return delay("Processing....",1000);
// })
//  .then(()=> {
//  return delay("done",1000);
//  })

// const square = (n) => {
//     return n * n;
// };

// square(5);
// const fn = () => { 5 + 5 };
// console.log(fn())
// const add = (a,b) => a+b;
// console.log(add(2,3))

// let text = `Hello
// How are you
// I am fine`;
// console.log(text);

// let name = "raj";
// let age = 20;
// let msg = `my name is ${name} and I am ${age}`;
// // console.log(msg);
// let arr = [10, 20, 30];

// let [a, b, c] = arr;

// let arr = [10];
// let [a, b = 20] = arr;

// console.log(a, b);

// let user = {name:"Raj",age:30};
// let {name} = user;
// console.log(user)

// let arr1 = [1,2];
// let arr2 = [...arr1,3,4,5,6,7];
// console.log(arr1);
// let user = {name:"raj"};
// let newUser = {...user,age:20};
// console.log(newUser);

// function sum(...nums){
//     console.log(nums);
// }
// sum(1,2,3);

// let obj = {};
// console.log(obj?.name);



// random quote genrator
// let btn = document.getElementById("btn");  
// let quote = document.getElementById("quote"); 

// btn.addEventListener("click",async function () {
//     let res = await fetch("https://dummyjson.com/quotes");
//     try {
//         if (!res.ok) {
//             throw Error("failed to fetch");
//         }

//         let data = await res.json();
//         let random = Math.floor(Math.random()*data.quotes.length) ;
//         quote.innerText = data.quotes[random].quote
//     }catch(err){
//         quote.innerText = "Failed to fetch data";
//     }

// });


// weather app

// let user = document.getElementById("user");
// let btn = document.getElementById("btn");
// let result = document.getElementById("result");

// btn.addEventListener("click", async function () {

//     let city = user.value;

//     try {
//         let res = await fetch(`https://wttr.in/${city}?format=j1`);
       

//         if (!res.ok) {
//             throw new Error("failed to fetch");
//         }
       

//         let data = await res.json();

//         // access data
//         let temp = data.current_condition[0].temp_C;
//         let desc = data.current_condition[0].weatherDesc[0].value;
       

//         result.innerText = `Temperature: ${temp}°C\nCondition: ${desc}`;

//     } catch (err) {
//         result.innerText = "Something went wrong";
//     }

// });

let input = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async function () {

    let userText = input.value;

    try {
        let res = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=YOUR_API_KEY", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: userText }
                        ]
                    }
                ]
            })
        });

        if (!res.ok) {
            throw new Error("API error");
        }

        let data = await res.json();

        // extract AI response
        let reply = data.candidates[0].content.parts[0].text;

        result.innerText = reply;

    } catch (err) {
        result.innerText = "Something went wrong";
        console.log(err);
    }

});
