import axios from 'axios'
import fs from 'fs'
import formData from 'form-data'
import userModel from '../models/userModel.js'

// controller fxn to remove bg from image
const removeBgImage = async (req, res) => {
    try {
        const {clerkId} = req.body
        const user = await userModel.findOne({clerkId})

        if(!user){
            return res.json({success: false, message: 'User not found'})
        }

        if(user.creditBalance === 0){
            return res.json({success: false, message: 'No credit balance', creditBalance:user.creditBalance})
        }

        const imagePath = req.file.path
        // reading the image file
        const imageFile = fs.createReadStream(imagePath)


    } catch (error) {
        console.log(error.message);
        res.json({ success:false, message:error.message })
    }
}

export {removeBgImage}