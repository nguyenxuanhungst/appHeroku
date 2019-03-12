const login = require("facebook-chat-api");
//
var express = require('express');
var app     = express();

app.set('port', (process.env.PORT || 5000));

//For avoidong Heroku $PORT error
app.get('/', function(request, response) {
    var result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});

// Create simple echo bot
login({email: "0584176294", password: "1621997"}, (err, api) => {
    if(err) return console.error(err);

    
    api.listen((err, message) => {
        api.sendTypingIndicator(message.threadID);
        //api.markAsRead(message.threadID);
        //api.sendMessage(message.body, message.threadID);
    });
    

});
