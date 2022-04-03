const express = require("express");

const app = express.Router()


router.get("" ,async ()=>{
    res.send("hello")
})


router.get("/book" ,async (req,res)=>{
    boook={
        "book1":"Amar",
        "book2":"akabar",
        "book3":"Anthony"
    }
})


express().listen(5000)