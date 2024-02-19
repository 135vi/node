const sendModule = require('./send');

sendModule.send(sendModule.URL, "Some data");

sendModule.send = function(url, data) {
    console.log(`Sent request to ${url} with another ${data}`)
}

sendModule.send(sendModule.URL, "Some data");