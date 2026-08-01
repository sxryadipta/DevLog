import { error } from "console";
import fs from "fs";
import http from "http";
import url from "url";
import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("Hi Surya!");
})

app.get("/about", (req, res) =>{
  res.send("I am Suryadipta Ghosh, also known as sxryadipta. I am a BTech Undergrad in Punjab Engineering College, Chandigarh")
})

app.get("/contact", (req, res) => {
  res.send("For info, contact sxryadipta@gmail.com")
})


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