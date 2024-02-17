const serviceproviderSchema = require("../models/ServiceProviderModel")


const createServiceProvider = async (req,res)=>{
    try{
        const savedserviceProvider = await serviceproviderSchema.create(req.body)
        res.status(201).json({
            message:"Serviceprovider created successfully",
            data:savedserviceProvider,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message:"Internal Server Error",
            data:error,
            flag:-1
        })
    }
}

const getAllServiceProviders = async(req,res)=>{
    try{
        const serviceProviders = await serviceproviderSchema.find().populate("role")
        res.status(200).json({
            message:"Serviceproviders fetched",
            data:serviceProviders,
            flag:1
        })
    }catch(error){
        res.status(500).json({
            message: "Server error",
            data:error,
            flag:-1
        })
    }
}

const getServiceProviderById = async (req,res)=>{
    try{
        const  serviceProvider=await serviceproviderSchema.findById(req.params.id).populate("role")
        if(serviceProvider==null){
            res.status(404).json({
                messsge:"Serviceprovider not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service provider fetched",
                data:serviceProvider,
                flag:1
            })
        }
    }catch(error){
        res.status(500).json({
            message:"Error in Fetching Service Provider",
            flag:-1,
            data:error
        })
    }
}

const deleteServiceProvider = async (req,res)=>{
    try{
        const deletedServiceProvider = await serviceproviderSchema.findByIdAndDelete(req.params.id).populate("role")
        if(deletedServiceProvider==null){
            res.status(404).json({
                message:"Serviceprovider not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Serviceprovider deleted  successfully!",
                data:deletedServiceProvider,
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

const updateServiceProvider = async(req,res)=>{
    try{
        const newServiceProvider = req.body
        const updatedServiceProvider = await serviceproviderSchema.findByIdAndUpdate(req.params.id,newServiceProvider)
        if(updatedServiceProvider == null) {
            res.status(404).json({
                message:"Serviceprovider not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message:"Service Provider updated Successfully",
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
    createServiceProvider,
    getAllServiceProviders,
    getServiceProviderById,
    deleteServiceProvider,
    updateServiceProvider
}