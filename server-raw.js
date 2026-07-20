import fs from "fs";
import https from "https";
import url from "url";

const myServer = https.createServer((req,res) => {
  res.end("Hi Surya!")
}).listen(8000);
console.log("Server has started at port 8000");