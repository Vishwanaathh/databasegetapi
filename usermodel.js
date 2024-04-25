const mongoose=require('mongoose');
const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Please enter username"]

        },
        password:{
            type:String,
            required:[true,"password"]

        }
    }
)
const product=mongoose.model('Product',productSchema);
module.exports=product;