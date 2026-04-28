// let btn = document.getElementById("btn");
// let result = document.getElementById("result");

// btn.addEventListener("click",async function(){
//   result.innerText = "Loading...";

//   try{
//     let res = await fetch("https://jsonplaceholder.typicode.com/");

//     let data =  await res.json();
//        result.innerText = data;
//      console.log(data)
//   }catch(err){
//     result.innerText = "Failed to fetch API";
 
//   }
// })

let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async function () {
  result.innerText = "Loading...";

  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts");

    let data = await res.json();

    console.log(data);

    // show something on screen
    result.innerText = data[0].title;

  } catch (err) {
    result.innerText = "Failed to fetch API";
    console.error(err);
  }
});