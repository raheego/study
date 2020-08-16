/*const http = require("http");
const fs = require("fs");
const path = require("path"); //경로 찾아가는 

http.createServer((rep, res) => {
    if( req.url == "/"){
        const fileName = path.join(__dirname, "../public/index.html");
        fs.readFile(fileName, "utf-8", (err, date) => {
            if(!err){
                return res.end(date)
            }
        });
        return res.end("hello");
        
    }else{
        return res.end("404");
    }

}).listen(8080)

*/

const http = require("http")
const fs = require("fs")
const path = require("path")
const readFile = require("./readFile")

http.createServer((req, res) => {
    if (req.url === "/") {
        return readFile("index", (data) => res.end(data))
    } else if(req.url === "/users") {
        return readFile("users", (data) => res.end(data))
    } else {
        return res.end("404")
    }
}).listen(8080)
