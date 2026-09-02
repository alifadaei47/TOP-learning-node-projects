const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

function getAllMessages(text, user, added) {
  return messages;
}

function addNewMessage(text, user, added) {
  messages.push({
    text,
    user,
    added,
  });
}

export { getAllMessages, addNewMessage };
