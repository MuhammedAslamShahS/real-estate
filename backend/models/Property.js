import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        location: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
        },
        details: {
            type: String,
            required: true,
            trim: true,
        },
        category: {
            type: String,
            enum: ["villa", "apartment", "house", "land", "commercial"],
            required: true,
        },
        type: {
            type: String,
            enum: ["sale", "rent", "lease"],
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
