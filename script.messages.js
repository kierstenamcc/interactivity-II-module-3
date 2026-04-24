function openChat() {
  document.getElementById("chatBox").style.display = "block";
}

function closeChat() {
  document.getElementById("chatBox").style.display = "none";
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

const replies = [
  "wyd?",
  "how r u?",
  "hope ur day is awesome",
  ":)",
];

let lastReply = "";

function getReply() {
  let reply;

  do {
    reply = replies[Math.floor(Math.random() * replies.length)];
  } while (reply === lastReply);

  lastReply = reply;
  return reply;
}

reply.textContent = replies[Math.floor(Math.random() * replies.length)];

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}