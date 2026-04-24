let input = document.getElementById("input");
let output = document.getElementById("output");

const key = "AIzaSyCAujF9O_G0-TMRST0Kd47GW5l5x9KihOo";

async function callGemini(prompt) {
    try{
        output.textContent = "Loading...";


        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                contents:[
                    {
                        parts:[{text:prompt}]
                    }
                ]
            })
        });
        let data  = await res.json();
        let text = data.candidates[0].content.parts[0].text;
        output.textContent = text;
    }catch(error) {
        output.textContent = "Error:"+ error.message;
       
    }
}

function askAI() {
    let prompt = "Explain in simple plain text. Do not use stars, bullets, or special characters:\n" + input.value;
    callGemini(prompt);
}

function summarize() {
    let prompt = "Summarize in 2-3 short lines. Use plain text only, no symbols:\n" + input.value;
    callGemini(prompt);
}

function ideas() {
    let prompt = "Give 5 simple ideas in plain text. No bullets or special characters:\n" + input.value;
    callGemini(prompt);
}

function define() {
    let prompt = "Explain in some  line  simple sentence using plain text only:\n" + input.value;
    callGemini(prompt);
}