const login = require("facebook-chat-api");

// Create simple echo bot
login({email: "0584176294", password: "1621997"}, (err, api) => {
    if(err) return console.error(err);

    api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
api.listen((err, message) => {
        api.sendMessage(message.body, message.threadID);
    });
});