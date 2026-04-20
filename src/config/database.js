import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;

        if (!mongoUri) {
            throw new Error("MONGODB_URI is not set in .env");
        }

        const connectionInstance = await mongoose.connect(mongoUri, {
            serverSelectionTimeoutMS: 10000,
        });

        console.log(
            `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
        );

    } catch (error) {
        console.error("MongoDB connection failed:", error.message);

        if (error.code === "ECONNREFUSED" && error.syscall === "querySrv") {
            console.error(
                "DNS SRV lookup was refused. Your mongodb+srv URI is valid, but Node cannot resolve Atlas SRV records from the configured DNS server."
            );
            console.error(
                "Fix: change your system/VPN DNS settings, or use the non-SRV mongodb:// connection string from MongoDB Atlas."
            );
        }

        process.exit(1);
    }
};

export default connectDB;
