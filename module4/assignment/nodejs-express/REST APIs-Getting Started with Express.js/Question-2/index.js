import express from "express"
import readFile from "./read.js"
import os, { cpus } from "os"
import dns from "dns"
const app= express()

app.get("/test",(req,res)=>{
    res.send("Test route is working!")
})

app.get("/test",(req,res)=>{
    res.send("Test route is working!")
})

app.get("/readfile",(req,res)=>{
    
    res.send(readFile())
})

app.get("/systemdetails",(req,res)=>{
    res.json({
        platform: os.platform(),
        totalMemory: os.totalmem()/(1024*1024*1024),
        cpus: os.cpus
    })
})

app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", (err, address) => {
    if (err) {
      res.send("Error");
    } else {
      res.send(address);
    }
  });
});

app.listen(2000,(req,res)=>{
    console.log("server running")
})