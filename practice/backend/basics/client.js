const net = require("net");
const fs = require("fs");

const SERVER_HOST="localhost";
const SERVER_PORT =3000;

const sendFilePath ="./file_to_send.txt";
const fileStream = fs.createReadStream(sendFilePath);

const client = net.createConnection(SERVER_PORT,SERVER_HOST,()=>{
        console.log("Connection established");
        fileStream.pipe(client);
});


fileStream.on("end",()=>{
    console.log("Client file send success");
})

fileStream.on("error",()=>{
    console.log("file send error");
    client.end();
})


client.on("error",()=>{
    console.log("Client file send error");
    fileStream.end();
})