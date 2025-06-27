import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number, //user:2001 & creator:7001.
        required: true
    }
}, { strict:true})

const User = mongoose.model('User',userSchema);

export default User; 