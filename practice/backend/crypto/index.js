const readline = require("readline");
const crypto = require("crypto");

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});


console.log("server up");

r1.on("line",(input)=>{
    const encryptMessg = encryptMessage(input);
    console.log(`Encripted input : ${encryptMessg}`);
    console.log(`decryted :: ${decryptMessage(encryptMessg)}`);
    
    
})


function encryptMessage(message){
    const cipher = crypto.createCipheriv("aes-256-ctr",key,iv );
    let encrypted = cipher.update(message,"utf8","hex")
    encrypted+=cipher.final("hex");
    return encrypted;
}

function decryptMessage(message){
    const decipher = crypto.createDecipheriv("aes-256-ctr",key,iv );
    let decrypted = decipher.update(message,"hex","utf8")
    decrypted+=decipher.final("utf8");
    return decrypted;
}