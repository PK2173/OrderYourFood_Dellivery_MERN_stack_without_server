const express = require("express");
const router = express.Router();
const knex = require("../config/dbconnection");
const uploade = require("../middelwear/multer");
const cloudinary = require("../middelwear/cloudnery");
const { virifiToken } = require("../middelwear/jwt");

router.post("/",virifiToken, uploade.single("image"), async (req, res) => {
  try {
    if (req.file.path) {
      try {
        let img = await cloudinary.uploader.upload(
          ((req || {}).file || {}).path || "");
        let img1 = img.secure_url;
        let {user_id} = req.userData[0]
        let imgrepo = await knex("Foodstoreg").insert({...req.body,imageURL:img1,user_id:user_id})
        res.send("inserted")
      } catch (error) {
        console.log(error);
        res.send("somthing went wrong");
      }
    } else {
      res.send("somthing went wrong");
    }
  } catch (error) {
    console.log(error);
    res.send("somthing went wrong");
  }
});


router.get("/foodinfo/:typefood",async (req,res)=>{
  let data = await knex("Foodstoreg").where({foodtype:req.params.typefood})
  res.send(data)
})

router.post("/foodinfo",uploade.single("image"),async (req,res)=>{
  console.log(req);
  console.log(req.body);
  res.send("data")
})

module.exports = router;
