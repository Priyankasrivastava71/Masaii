import fs from "fs"


function readFile(){

return fs.readFileSync("./data.txt","utf-8")
}
export default readFile;