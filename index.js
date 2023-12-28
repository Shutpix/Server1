const { log } = require('console');
const http = require('http');
const port = 4000;

const server = http.createServer();


server.listen(port, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port: ", port);
    }
})