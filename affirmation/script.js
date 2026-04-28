
const affirmation = document.getElementById("affirmation-text");

const fetchAffirmation = async () => {
  try {
    affirmation.textContent = "✨ Loading positive vibes...";

    const res = await fetch("http://localhost:3000/api/gemini", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: "Give me one short positive affirmation in simple plain text (no symbols)."
      })
    });

    const data = await res.json();

    let text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Stay positive and keep going!";

    affirmation.textContent = text;

  } catch (err) {
    affirmation.textContent = "✨ Stay positive and keep going!";
    console.log(err);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  fetchAffirmation();
});
