let input = document.getElementById("input");
let btn = document.getElementById("btn");
let chat = document.getElementById("chat");
const key = "AIzaSyATaZNTvd5UYs8OoVDK_hzqRVHuF4BIQB0";



function addMessage(text,sender){
    let div = document.createElement("div");
    div.classList.add("message",sender);
    div.innerText = text;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

btn.addEventListener("click",sendMessage);

input.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});
 async function sendMessage() {
    let userText = input.value.trim();

    if (userText === "") return;
    addMessage(userText,"user");
    input.value = "";

    let typing = document.createElement("div");
    typing.classList.add("message","bot");
    typing.innerText = "Typing...";
    typing.id = "typing";
    chat.appendChild(typing);

    try {
        let res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [{ text: userText }]
                    }
                ]
            })
        });

        if (!res.ok) {
            throw new Error("API error");
        }

        let data = await res.json();
        console.log(await res.json());

        let reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
        document.getElementById("typing").remove();
        addMessage(reply || "No response","bot")
  
      
    } catch (err) {
            console.error("FULL ERROR:", err);

      document.getElementById("typing").remove();
      addMessage("Error occured","bot");
          

    }
};