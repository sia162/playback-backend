import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env",
});

connectDB()
.then(()=>{
    app.on("error",(error) =>{
        console.log("Server connection failed!!",error);
        throw error;
    })
    
    app.listen(process.env.PORT  || 8000, () => {
        console.log(`Server running on port http://localhost:${process.env.PORT}`);
    })
})
.catch((err) => console.log("Mongo DB connection failed!!",err));
