import express from "express"
import fs from "fs"

const app= express();
app.use(express.json());
function readData(){
    const data=fs.readFileSync("db.json","utf-8")
    return JSON.parse(data)
}

function writeData(data){
    fs.writeFileSync("db.json",JSON.stringify(data,null,2))
}

app.get("/students",(req,res)=>{
    const data = readData()
    res.json(data.students);
})

app.post("/students",(req,res)=>{
    const data = readData();
    const newStudent={
        id: data.students.length + 1,
        name: req.body.name,
        course: req.body.course,
        year: req.body.year
    }
    data.students.push(newStudent);
    writeData(data);
    res.json({
        message:"student added",
        student: newStudent
    })
})

app.put("/students",(req,res)=>{
    const data= readData()
    const id = Number(req.params.id)
    const student = data.students.find(s=>s.id==id);
    if(!student){
        return res.json({message:"student not found"})
    }
    student.name=req.body.name||student.name;
    student.course=req.body.course||student.course;
    student.year=req.body.year||student.year;
    writeData(data)
res.json({
    message:"student updated",
    student
})
});

app.delete("/students/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const newStudents = data.students.filter(s => s.id !== id);

  if (newStudents.length === data.students.length) {
    return res.json({ message: "Student not found" });
  }

  data.students = newStudents;
  writeData(data);

  res.json({ message: "Student deleted" });
});

app.listen(4000, () => {
  console.log("Server running");
});