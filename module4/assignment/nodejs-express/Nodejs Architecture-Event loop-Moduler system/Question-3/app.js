const os = require("os")
console.log(os.cpus())

console.log(os.freemem())

const f=require("fs")
let d=f.readFileSync("./data.txt",{encoding:"utf-8"})
console.log(d)

f.writeFileSync("./Readme.md","## This is first line in Readme")
console.log("file written by me")

f.appendFileSync("./data.txt"," This is second line")

f.unlinkSync("./Readme.md")
