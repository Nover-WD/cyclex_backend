import mongoose from "mongoose";
import bycrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        isAdmin: {
            type: Boolean,
            required: true,
            default: false
        },
        lastLogin: {
            type: Date,
            required: true,
            default: new Date()
        }
    },
    {
        timestamps: true
    }
);

//hashed the plain password before it saved to db
userSchema.pre("save", async function (next) {
    //if not modified
    if(!this.isModified("password")){
        next();
    }
    const generatedSalt = await bycrypt.genSalt();

    this.password = await bycrypt.hash(this.password, generatedSalt);
})

userSchema.methods.matchPassword = async function(plainPassword) {
    return await bycrypt.compare(plainPassword, this.password);
}

const User = mongoose.model("User", userSchema);

export default User;