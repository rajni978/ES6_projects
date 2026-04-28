import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();   // ✅ THIS WAS MISSING

app.use(cors());
app.use(express.json());

app.post("/api/gemini", async (req, res) => {
  try {
    const prompt = req.body.prompt;
    console.log("Prompt received:", prompt);

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log("Gemini API Error:", errorText);
      return res.status(500).json({ error: "Gemini API failed" });
    }

    const data = await response.json();
    console.log("Gemini response:", data);

    res.json(data);

  } catch (err) {
    console.log("Server error:", err);
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});