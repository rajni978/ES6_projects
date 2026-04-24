let userInput = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

let key = "AIzaSyAZLWtvPfUTl0ZBkFjIiqdXy889uL_5aPg";


btn.addEventListener("click", async function() {
    let topic = userInput.value;

    result.innerText = "loading...";

    try {
        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Give me 1 simple question and its answer about ${topic}.
Format:
Question: ...
Answer: ...`
                    }]
                }]
            })
        });

        if (!res.ok) {
            throw new Error("API error");
        }

        let data = await res.json();

        let text = data.candidates[0].content.parts[0].text;

        result.innerText = text || "No question generated. Try a different topic! 😅";
        console.log(res.status);

    } catch (err) {
        console.log(err);
        result.innerText = "Oops! Something went wrong. Check your connection and try again! 🔄";
    }
});