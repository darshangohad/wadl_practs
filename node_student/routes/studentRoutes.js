const express = require("express");
const router = express.Router();

const Student = require("../models/studentModel");

router.post("/addmarks",async(req,res)=>{
    const data = new Student(req.body);

    console.log(req.body);

    data
    .save()
    .then(()=>{
        console.log("Data saved successully");
    })
    .catch((error)=>{
        console.log("Error saving Data : ", error);
    })
})

router.get("/getmarks", async(req,res)=>{
    Student.find({})
    .then((item)=>{
        res.render("table",{
            student : item
        })
    })
    .catch((error)=>{
        console.log("Error getting Data : ", error);
    })
})

router.get("/ccgreaterthan20", async(req,res)=>{
    Student.find({
        cc_marks : { $gt : 20}
    })
    .then((item)=>{
        res.render("table",{
            student : item
        })
    })
    .catch((error)=>{
        console.log("Error getting dsbda Data : ", error);
    })
})

router.get("/allgreaterthan20", async(req,res)=>{
    Student.find({
        wad_marks : { $gt : 20},
        cc_marks : { $gt : 20},
        cns_marks : { $gt : 20},
    })
    .then((item)=>{
        res.render("table",{
            student : item
        })
    })
    .catch((error)=>{
        console.log("Error getting all students Data : ", error);
    })
})

router.post("/update", async(req,res)=>{
    try{
        let { roll_no, subject, new_marks } = req.body;

        //console.log(req.body);

        const item = await Student.findOne({ roll_no : roll_no });

        //console.log(item);

        if(!item){
            return res.status(404).json({message : "Student not Found"});
        }

        let updatedSubject;

        switch(subject){
            case 'wad':
                updatedSubject = "wad_marks"
                break;
            case 'cc':
                updatedSubject = "cc_marks"
                break;
            case 'cns':
                updatedSubject = "cns_marks"
                break;
            default:
                    return res.status(400).json({ message: "Invalid subject" });
        }

        //console.log(updatedSubject);

        //item[updatedSubject] = new_marks;

        Student.findOneAndUpdate(
            { roll_no },
            { $set : { [updatedSubject] : new_marks}},
            { new : true},
        )
        .then(()=>{
            console.log("Student updated successfully");
        })
        .catch((error)=>{
            console.log("Error getting all students Data : ", error);
        })
        
    }
    catch{
        res.status(500).json({ message: "Error updating data" });
    }
})

router.get("/lessthan20", async(req,res)=>{
    Student.find({
        cc_marks : { $lt : 20},
        cns_marks : { $lt : 20},
    })
    .then((item)=>{
        res.render("table",{
            student : item
        })
    })
    .catch((error)=>{
        console.log("Error getting all students Data : ", error);
    })
})

router.post("/delete", async(req,res)=>{
    Student.findOneAndDelete({
        roll_no : req.body.roll_no
    })
    .then(()=>{
        console.log("Student deleted successfully");
    })
    .catch((error)=>{
        console.log("Error deleting students Data : ", error);
    })
})

module.exports = router;