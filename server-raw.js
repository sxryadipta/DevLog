import fs from "fs";
import http from "http";
import url from "url";

const myServer = http.createServer((req,res) => {
  switch(req.url){
    case "/": res.end("Hi Surya!");
    break;
    case "/activity": res.end("This will have the activity");
    break;
    case "/stats": res.end("This will have the stats");
    break;
    default: res.end("404 not found")
  }
  
}).listen(8000);
console.log("Server has started at port 8000");

const myUrl = url.parse("https://api.github.com/sxryadipta");
console.log(myUrl);
