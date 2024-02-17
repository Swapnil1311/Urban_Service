const userSchema = require("../models/UserModel")

const createUser = async(req,res)=>{
    try{
        const savedUser = await userSchema.create(req.body)
        res.status(201).json({
            message:"User created successfully",
            data:savedUser,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error in creating User",
            data:error,
            flag:-1
        })
    }
}

const getAllUsers = async(req,res)=>{
    try{
        const users = await userSchema.find().populate("role")
        res.status(200).json({
            message:"User fetched successfully",
            data:users,
            flag:1
        })

    }catch(error){
        res.status(500).json({
            message:"Error in getting users",
            data:error,
            flag:-1
        })
    }
}

const deleteUser = async(req,res)=>{
    try{   
        const id = req.params.id
        const deletedUser = await userSchema.findByIdAndDelete(id).populate("role")
        if(deletedUser==null){
            res.statu(404).json({
                message:"User not found",
                flag:-1
            })

        }else{
            res.status(200).json({
                message:"User Deleted Successfully",
                data:deletedUser,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in deleting User",
            data:error,
            falg:-1
        })
    }
}

const getUserById = async(req,res)=>{
    try{
        const id = req.params.id
        const user = await userSchema.findById(id).populate("role")
        if(user==null){
            res.status(404).json({
                message:"User not found",
                flag:-1
            })
        } else{
            res.status(200).json({
                message:"User found successfully",
                data:user,
                flag:1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in getting the user by id",
            data:error,
            flag:-1
        })
    }
}

const updateUser = async(req,res)=>{
    const newUser = req.body
    try{   
        const updatedUser = await userSchema.findByIdAndUpdate(req.params.id,newUser).populate("role")
        if(updatedUser===null){
            res.status(404).json({
                message:"User not found",
                flag:-1
            })
        }else{
            res.status(200).json({
                message: "User has been updated!",
                flag: 1
            })
        }

    }catch(error){
        res.status(500).json({
            message:"Error in updating the user",
            data:error,
            flag:-1
        })
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    getUserById,
    updateUser
}