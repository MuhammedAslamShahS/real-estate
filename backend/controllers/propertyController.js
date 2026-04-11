import Property from "../models/Property.js";

// Add Property
const addProperty = async (req, res) => {
    try {
        const { name, location, price, details, category, type } = req.body;

        if (!name || !location || !price || !details || !category || !type || !req.file) {
            return res.status(400).json({
                success: false,
                message: "All fields including image are required",
            });
        }

        const newProperty = new Property({
            name,
            location,
            price,
            details,
            category,
            type,
            image: req.file.filename,
        });

        await newProperty.save();

        res.status(201).json({
            success: true,
            message: "Property added successfully",
            data: newProperty,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error adding property",
            error: error.message,
        });
    }
};

// get All
const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: properties,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching properties",
        });
    }
};

// get single Properties
const getSingleProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found",
            });
        }

        res.status(200).json({
            success: true,
            data: property,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching property",
        });
    }
};

// Update Property

const updateProperty = async (req, res) => {
    try {
        const { name, location, price, details, category, type } = req.body;

        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found",
            });
        }

        property.name = name || property.name;
        property.location = location || property.location;
        property.price = price || property.price;
        property.details = details || property.details;
        property.category = category || property.category;
        property.type = type || property.type;

        if (req.file) {
            property.image = req.file.filename;
        }

        await property.save();

        res.status(200).json({
            success: true,
            message: "Property updated successfully",
            data: property,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating property",
        });
    }
};

// delete property
const deleteProperty = async (req, res) => {
    try {
        const property = await Property.findById(req.params.id);

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found",
            });
        }

        await property.deleteOne();

        res.status(200).json({
            success: true,
            message: "Successfully deleted property",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting property",
        });
    }
};

export { addProperty, getAllProperties, getSingleProperty, updateProperty, deleteProperty };
