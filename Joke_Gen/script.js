
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", async function () {
  // Loading state
  btn.classList.add("loading");
  btn.textContent = "Getting Joke...";
  result.classList.add("loading");
  result.innerText = "Loading hilarious joke...";

  let randomNum = Math.floor(Math.random() * 1000);

  try {
    let res = await fetch("http://localhost:3000/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: `Tell me a short, clean joke, variation:${randomNum}`
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

    // Show joke
    btn.classList.remove("loading");
    btn.textContent = "Get Joke";
    result.classList.remove("loading");
    result.classList.add("joke");
    result.innerText =
      joke ||
      "Why did the computer go to therapy? It had too many bytes of emotional baggage! 😂";

  } catch (err) {
    console.log(err);

    btn.classList.remove("loading");
    btn.textContent = "Get Joke";
    result.classList.remove("loading");
    result.classList.add("error");
    result.innerText = "Failed to load joke 😞 Try again!";
  }
});
