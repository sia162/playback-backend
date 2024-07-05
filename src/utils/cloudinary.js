//the files are stored on server locally using file system we take the file and upload it to cloudinary
//once when successful the file is upladed on cloudinary then we remove it from the server
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
   try {
        if(!localFilePath) return null;
        //upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto",
        })
        //file has been uploaded successfully
        console.log("File uploaded successfully on cloudinary!",response.url);
        return response;
   } catch (error) {
        fs.unlinkSync(localFilePath); //remove local file from server as the upload operation got failed
        return null;
   } 
}

export {uploadOnCloudinary};



