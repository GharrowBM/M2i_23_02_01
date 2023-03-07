// Demo Network
// https://nodejs.org/api/net.html 

const net = require("net");

const server = net.createServer(function(connection) {
    console.log('Client connected.');
    connection.on('end', function() {
        console.log('Client disconnected.');
    });
    connection.write('Hello World!\n');
    connection.pipe(connection);
// renvoie les données à l'objet de connexion qui est le client
})

server.listen(8081, function(){  // Port 8081 car 8080 déja utilisé par TomCat
    console.log('Server is listening.');
});

console.log('Server Program Ended');

// CTRL + C pour teminer le programme

const client = net.connect({port: 8081}, 'localhost', function() {
    console.log ('Connected to server.')
})

client.on('data', function(data) {
    console.log(data.toString());
    client.end();
})

client.on('end', function () {
    console.log('Disconnected from server');
})

console.log('Client Program Ended');

