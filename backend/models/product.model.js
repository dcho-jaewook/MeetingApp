import mongoose from 'mongoose';
import userSchema from './user.model.js'

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: false
    },
    duration: {
        type: Number,
        required: false
    },
    participants: {
        type: [userSchema],  // Use imported userSchema
        required: false
    }
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;