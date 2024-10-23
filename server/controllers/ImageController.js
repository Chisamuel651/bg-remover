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

        const formdata = new formData()
        formdata.append('image_file', imageFile)

        const {data, status} = await axios.post('https://clipdrop-api.co/remove-background/v1', formdata, {
            headers: {
                'x-api-key': process.ENV.CLIPDROP_API,
                ...formdata.getHeaders(),
            },
            responseType: 'arraybuffer'
        });

        console.log('ClipDrop API response status:', status); // Log the HTTP status
        console.log('ClipDrop API response data:', data);

        if (status !== 200 || !data) {
            return res.status(500).json({ success: false, message: 'ClipDrop API failed to process the image' });
        }

        const base64Image = Buffer.from(data).toString('base64');  // No 'binary' argument
        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, {creditBalance:user.creditBalance-1})

        res.json({success:true, resultImage, creditBalance: user.creditBalance-1, message:'background removed'})


    } catch (error) {
        console.log(error.message);
        res.json({ success:false, message:error.message })
    }
}

export {removeBgImage}