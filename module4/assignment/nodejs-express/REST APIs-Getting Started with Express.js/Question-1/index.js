import express from "express"

const app = express()
app.get("/home",(req,res)=>{
    res.send("This is home page")
})

app.get("/contactus",(req,res)=>{
    res.send("Contact us at contact@contact.com")
})
app.listen(3000,(req,res)=>{

    console.log("Server is running on http://localhost:3000")
})