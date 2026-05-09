import  {form} from "../models/form.model.js"

const createform = async (req , res ) => {
    try {
        const { name, email, phone , description} = req.body;

        if (!name || !email || !phone || !description){
            return res.status(400).json({
                message: "All Fields are required"
            });
        }

        if(phone.length < 10 || phone.length >10 ){
            return res.status(400).json({
                message:"Phone should be 10 digist"
            });
        }
        const createdForm = await form.create({
            name,
            email,
            phone,
            description,
        });
        return res.status(201).json({
            message : "Form Submitted Successfully",
            form: createdForm
        });
    } catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
}
export{
    createform,
}
