let input = document.getElementById("input");
let output = document.getElementById("output");

async function callGemini(prompt) {
    try {
        output.textContent = "Loading...";

        let res = await fetch("http://localhost:3000/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: prompt
            })
        });

        let data = await res.json();
        let text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        output.textContent = text || "No response";

    } catch (error) {
        output.textContent = "Something went wrong";
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
    let prompt = "Explain in some line simple sentence using plain text only:\n" + input.value;
    callGemini(prompt);
}