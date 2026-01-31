import fs from "fs"
import path from "path"

const logFile=path.join(process.cwd(),"logs.txt");
export const logger=(req,res,next)=>{
    const log='${req.method}${req.originalUrl}${new Date().toISOString()}\n'
    fs.appendFile(logFile,log,(err)=>{
        if(err) console.error("Log error:",err)
    })
next()
}