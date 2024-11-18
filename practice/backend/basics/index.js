const net = require("net");
const fs = require("fs");

const PORT = 3000;


const receiveFilePath ="./recived_file.txt";


const server = net.createServer((socket)=>{
    console.log("Client connected");
    const fileStream = fs.createWriteStream(receiveFilePath);
    socket.on("data",(data)=>{
        fileStream.write(data)
    });
    socket.on("end",()=>{
        console.log("FIle recived");
        fileStream.end();
        socket.destroy();
    })
    socket.on("error",()=>{
        console.log("Error encoundered");
        fileStream.close();
        socket.destroy();
    })
})

server.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}`);
    
})