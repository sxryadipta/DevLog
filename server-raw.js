import { error } from "console";
import fs from "fs";
import http from "http";
import url from "url";

const myServer = http.createServer((req,res) => {
  switch(req.url){
    case "/": res.end("Hi Surya!");
    break;
    case "/activity": {
      const activity = jsonActivity.slice(0, 5).map(event => ({
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at
      }));
      res.end(JSON.stringify(activity));
    }
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
let jsonActivity;

const myUrl = url.parse("https://api.github.com/users/sxryadipta");
console.log(myUrl);

fetchData();
fetchActivity();

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

async function fetchActivity() {
  try {
    const actiResponse = await fetch("https://api.github.com/users/sxryadipta/events")
    if (!actiResponse.ok){
      throw new Error(`HTTP Error! Status : ${actiResponse.status}`)
    }
    jsonActivity = await actiResponse.json();
    fs.appendFile(
      "activity.json",
      JSON.stringify(jsonActivity, null, 2),
      (err) => {
        if (err) console.error(err);
        else console.log("Data written successfully!");
      }
    )
  }
  catch (error) {
    console.error("Failed to fetch activity:", error);
  }
}