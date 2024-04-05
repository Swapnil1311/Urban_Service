const mongoose = require('mongoose')
const Schema = mongoose.Schema


const addressSchema = new Schema({
    addressName:{
        type:String,
    },
    country:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    pincode:{
        type:Number,
    },
    houseNo:{
        type:Number,
    },
    area:{
        type:String,
    },
    landmark:{
        type:String,
    },
    isDefault:{
        type:Boolean,
    },
    user:{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
})

module.exports=mongoose.model('Address',addressSchema)