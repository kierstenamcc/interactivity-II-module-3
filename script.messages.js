function openChat() {
  document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatBox").style.display = "none";
}

// general responsed from friend (randomized)
const replies = [
  "wyd?",
  "how r u?",
  "hope ur day is awesome",
  ":)",
];

let lastReply = "";

function getReply(text) {
  text = text.toLowerCase();

  // custom responses based on keywords
  if (text.includes("nothing")) return "boring 😭";
  if (text.includes("hi")) return "hey!!";
  if (text.includes("thank you") || text.includes("ty") || text.includes("thx")) return "no problem!";
  if (text.includes(":)")) return ":D";
  if (text.includes("class")) return "lame :P";

  // random responses(no repeat)
  let reply;
  do {
    reply = replies[Math.floor(Math.random() * replies.length)];
  } while (reply === lastReply);

  lastReply = reply;
  return reply;
}

// get user input and send message
function sendMessage() {
  const input = document.getElementById("messageInput");
  const text = input.value.trim();
  if (!text) return;

  const chat = document.getElementById("chatMessages");

  // user message
  const msg = document.createElement("div");
  msg.classList.add("message", "user"); // bubble chats :)
  msg.textContent = text;
  chat.appendChild(msg);
  input.value = ""; // clear input box after sending

  chat.scrollTop = chat.scrollHeight;

  // fake reply (MSN vibe)
  setTimeout(() => {
    const reply = document.createElement("div");
    reply.classList.add("message", "friend");
    chat.appendChild(reply);

    const botReply = getReply(text);
    reply.textContent = botReply;

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}