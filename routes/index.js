var express=require('express')
var fs=require('fs')
var router=express.Router()
var path=require('path')
let serviceCall=require('./apicall')
// console.log(recently_viewed)
router.get('/',function(req,res){
    let trending_items=fs.readdirSync(path.join(__dirname,'../public/images/trending_items'))
    res.render('m',{trending_items})
})
router.get('/productlist',function(req,res){
    res.render('productlist')
})
router.post('/productimages',(req,res)=>{
    let recently_viewed=fs.readdirSync(path.join(__dirname,'../public/images/recently_viewed'))
    res.send({recently_viewed})
})
router.get('/*',(req,res)=>{
    res.render('error')
})
module.exports=router
