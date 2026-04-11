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
            enum: ["Villa", "Apartment", "House", "Land", "Commercial"],
            required: true,
        },
        type: {
            type: String,
            enum: ["Sale", "Rent", "Lease"],
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const Property = mongoose.model("Property", propertySchema);

export default Property;
