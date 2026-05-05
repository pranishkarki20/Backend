import dotenv from "dotenv";
import connectDB from "./config/database.js";
import app from "./config/app.js";

dotenv.config({
    path: './.env'
});

const startServer = async () => {
    try {
        await connectDB();

        const PORT = process.env.PORT || 8000;

        const server = app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });

        // Handle server errors properly
        server.on("error", (error) => {
            console.error("Server Error:", error);
            process.exit(1);
        });

    } catch (error) {
        console.error("Server failed to start:", error.message);
        process.exit(1);
    }
};

startServer();