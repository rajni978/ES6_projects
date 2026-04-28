let userInput = document.getElementById("input");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async function () {
    let topic = userInput.value;

    result.innerText = "Loading...";

    try {
        let res = await fetch("http://localhost:3000/api/gemini", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                prompt: `Generate one simple quiz question on: ${topic}`
            })
        });

        if (!res.ok) {
            throw new Error("API error");
        }

        let data = await res.json();

        let text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        result.innerText =
            text || "No question generated. Try a different topic! 😅";

    } catch (err) {
        console.log(err);
        result.innerText =
            "Oops! Something went wrong. Check your connection and try again! 🔄";
    }
});