/**
 * server entry point
 * @module app
 */

var

    /** express module */
    express = require('express'),

    /** server instance */
    app = express(),

    /** the port the server will listen to for requests */
    port = process.env.PORT || process.argv[2] || 9000;

app.use(express.static(__dirname + '/dist', {
    maxAge: 2592000000 // 30 day cache
}))

/** handler for uncaught routes */
app.get('*', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

/** take requests on specified port */
app.listen(port);
console.log('Server listening on port ' + port + '.');

/** expose app */
module.exports = app;