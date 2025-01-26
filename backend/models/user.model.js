import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    isTeacher: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

export default userSchema;