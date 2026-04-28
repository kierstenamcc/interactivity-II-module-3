function openChat() {
  document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatBox").style.display = "none";
}

// reply logic (move OUTSIDE)
const replies = [
  "wyd?",
  "how r u?",
  "hope ur day is awesome",
  ":)",
];

let lastReply = "";

function getReply(text) {
  text = text.toLowerCase(); // makes matching better

  // custom responses
  if (text.includes("nothing")) return "boring 😭";
  if (text.includes("hi")) return "hey!!";
  if (text.includes("thank you") || text.includes("ty") || text.includes("thx")) return "no problem!";
  if (text.includes(":)")) return ":D";
  if (text.includes("class")) return "lame :P";

  // random (no repeat)
  let reply;
  do {
    reply = replies[Math.floor(Math.random() * replies.length)];
  } while (reply === lastReply);

  lastReply = reply;
  return reply;
}

function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const chat = document.getElementById("chatMessages");

  // user message
  const msg = document.createElement("div");
  msg.classList.add("message", "user");
  msg.textContent = text;
  chat.appendChild(msg);
  input.value = "";

  chat.scrollTop = chat.scrollHeight;

  // fake reply (MSN vibe)
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "friend");
    chat.appendChild(reply);

    const botReply = getReply(text); // USE the function
    reply.textContent = botReply;

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}