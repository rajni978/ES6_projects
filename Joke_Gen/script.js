// let btn = document.getElementById("btn");
// let result = document.getElementById("result");

// let key = "AIzaSyAe5n_GkLE5di7xyOWC57397cKr_Cwix0c";

// btn.addEventListener("click", async function() {
//     result.innerText = "loading...";

//     let randomNum = Math.floor(Math.random() * 1000);

//     try {
//         let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({
//                 contents: [
//                     {
//                         parts: [
//                             { text: `Tell me a short, clean joke,variation:${randomNum}` }
//                         ]
//                     }
//                 ]
//             })
//         });

//         if (!res.ok) {
//              let errText = await res.text();
//     console.log("REAL ERROR:", errText);
//     result.innerText = "API blocked or key issue";
//     return;

//         }

//         const data = await res.json();

//         const joke = data?.candidates?.[0]?.content?.parts?.[0]?.text;

//         result.innerText = joke;

//     } catch (err) {
//         console.log(err);
//         result.innerText = "Failed to load joke";
//     }
// });

let btn = document.getElementById("btn");
let result = document.getElementById("result");

let key = "AIzaSyAe5n_GkLE5di7xyOWC57397cKr_Cwix0c";

btn.addEventListener("click", async function() {
    // Add loading state
    btn.classList.add("loading");
    btn.textContent = "Getting Joke...";
    result.classList.add("loading");
    result.innerText = "Loading hilarious joke...";

    let randomNum = Math.floor(Math.random() * 1000);

    try {
        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            { text: `Tell me a short, clean joke, variation:${randomNum}` }
                        ]
                    }
                ]
            })
        });

        if (!res.ok) {
            let errText = await res.text();
            console.log("REAL ERROR:", errText);
            result.classList.remove("loading");
            result.classList.add("error");
            result.innerText = "Oops! API issue 😅 Try again!";
            return;
        }

        const data = await res.json();
        const joke = data?.candidates?.[0]?.content?.parts?.[0]?.text;

        // Reset states and show joke
        btn.classList.remove("loading");
        btn.textContent = "Get Joke";
        result.classList.remove("loading");
        result.classList.add("joke");
        result.innerText = joke || "Why did the computer go to therapy? It had too many bytes of emotional baggage! 😂";

    } catch (err) {
        console.log(err);
        btn.classList.remove("loading");
        btn.textContent = "Get Joke";
        result.classList.remove("loading");
        result.classList.add("error");
        result.innerText = "Failed to load joke 😞 Try again!";
    }
});