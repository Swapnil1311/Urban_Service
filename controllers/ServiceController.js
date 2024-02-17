const serviceSchema = require('../models/ServiceModel')


const createService = async(req,res)=>{
    try{
        const savedService = await serviceSchema.create(req.body)
        res.status(201).json({
            message:"Service created successfully ",
            data:savedService,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            falg:-1
        })
    }
}

const getAllServices = async(req,res)=>{
    try{
        const services = await serviceSchema.find().populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        res.status(200).json({
            message: "Data fetched Successfully!",
            data:services,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }
} 

const getServiceById = async(req,res)=>{
    try{
        const service = await serviceSchema.findById(req.params.id).populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        if(service==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service found",
                data:service,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server Error",
            data:error,
            flag:-1
        })
    }
}

const deleteService = async(req,res)=>{
    try{
        const deletedService = await serviceSchema.findByIdAndDelete(req.params.id).populate("category").populate("subCategory").populate("type").populate("serviceprovider")
        if(deletedService==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service deleted successfully!",
                data:deletedService,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }

}

const updateService = async(req,res)=>{
    try{
        const newService = req.body
        const updatedService = await serviceSchema.findByIdAndUpdate(req.params.id,newService)
        if(updatedService==null){
            res.status(404).json({
                message:"Service not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service updated successfully",
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Server error",
            data:error,
            flag:-1
        })
    }
}



module.exports ={
    createService,
    getAllServices,
    getServiceById,
    deleteService,
    updateService
}