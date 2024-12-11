const express = require('express')
const router = express.Router()
const ProjectDetail=require('../models/projectdetail')
router.get('/',async(req,res)=>{
    try{
        const projectdetails =await ProjectDetail.find()
        res.json(projectdetails)
    }catch(err){
        res.send('Error '+err)
    }
})
router.post('/projectdetails',async(req,res)=>{
    const projectdetail = new ProjectDetail({
            projectname : req.body.projectname
            
    })
    try{
        const p=await projectdetail.save()
        res.json(p)
    }catch(err){
        res.send('Error '+err)
    }

})
router.delete('/projectdetails',async(req,res)=>{
    try{
        const details =await ProjectDetail.remove()
        res.json('All are Deleted ')
    }catch(err){
        res.send('Error '+err)
    }
})

router.delete('/projectdetails/:id',async(req,res)=>{
    try{
        const projectdetail =await ProjectDetail.findById(req.params.id)
        const p1 = await projectdetail.remove()
        res.json('Deleted '+p1)
    }catch(err){
        res.send('Error '+err)
    }
})



module.exports = router