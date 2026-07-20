import fs from "fs";
import http from "http";
import url from "url";

const myServer = http.createServer((req,res) => {
  res.end("Hi Surya!")
}).listen(8000);
console.log("Server has started at port 8000");