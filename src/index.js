import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/app.js"; // ← import your express app

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();
        app.on("error", (error) => { 
            console.log("ERROR", error);
            throw error ; 
        });

        app.listen(process.env.PORT || 8000 , () => {
            console.log(`Server is running on port : ${process.env.PORT}`);
        })
    } catch (error) {
        console.error("Server failed to start:", error.message);
        process.exit(1);
    }
};

startServer(); 