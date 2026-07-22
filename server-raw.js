import fs from "fs";
import http from "http";
import url from "url";

const myServer = http.createServer((req,res) => {
  switch(req.url){
    case "/": res.end("Hi Surya!");
    break;
    case "/activity": res.end("This will have the activity");
    break;
    case "/stats": {
      const stats = {
        public_repos : jsonData.public_repos,
        followers : jsonData.followers,
        following : jsonData.following,
        bio : jsonData.bio
      }
      res.end(JSON.stringify(stats));
    }
    break;
    default: res.end("404 not found")
  }
  
}).listen(8000);
console.log("Server has started at port 8000");


let jsonData;
const myUrl = url.parse("https://api.github.com/users/sxryadipta");
console.log(myUrl);
fetchData();

async function fetchData() {
  try{
    const response = await fetch("https://api.github.com/users/sxryadipta");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    jsonData = await response.json();
    fs.appendFile(
      "github.json",
      JSON.stringify(jsonData, null, 2),
      (err) => {
        if (err) console.error(err);
        else console.log("Data written successfully!");
      }
    );
  }
  
  
  catch (error) {
    console.error('Failed to fetch data:', error);
  }
}
