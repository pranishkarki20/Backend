import mongoose , {Schema} from "mongoose";
const formSchema = new Schema ({
    name : {
        type:String,
        required:true, 
        trim:true,
    },
    email:{
        type:String, 
        required: true , 
        unique: true , 
        lowercase: true , 
        trim : true 
    },

    phone: {
        type: Number, 
        required: true,
    }
})
export const form = mongoose.model('form' , formSchema)
