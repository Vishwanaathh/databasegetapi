const express=require('express')
const mongoose=require('mongoose')
const Product=require('./usermodel')
const cors=require('cors')


app=express()
app.use(cors())
app.get('/',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.json(products); 


        
    } catch (error) {
        console.error("Error retrieving products:", error);
        res.status(500).send("Internal Server Error");
    }
    
})




app.listen(3005,()=>{
    mongoose.
    connect("mongodb+srv://admin:root@cluster0.kwlzyeo.mongodb.net/REY?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>{console.log("connected to database")})
    

})