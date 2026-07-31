import express from "express";


const app = express();

app.get("/", (req, res) => {
  res.send("Hi Surya!");
})

app.get("/about", (req, res) =>{
  res.send("I am Suryadipta Ghosh, also known as sxryadipta.")
})