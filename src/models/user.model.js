import mongoose , {Schema } from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase:true,
            trim:true,
            minlength: 1,
            maxlength: 100, 
        }, 
        password:{
            type:String,
            required:true,
            minlength:6,
            maxlength:10, 
        },
        email:{
            type:String,
            required: true,
             unique: true,
            lowercase:true,
            trim:true,


        },

    }, 
    {
        timestamps: true
    }
)
//before saving password we need to save it 
userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password, 10);
}); 

//compare passwords 
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}
export const User = mongoose.model("user" ,userSchema)
