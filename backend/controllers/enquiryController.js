import Enquiry from "../models/Enquiry.js";

const createEnquiry = async (req, res) => {
    try {
        const userId = req.user._id;
        const { propertyId, message } = req.body;

        if (!propertyId) {
            return res.status(400).json({
                success: false,
                message: "Property ID is required",
            });
        }

        const enquiry = await Enquiry.create({
            user: userId,
            property: propertyId,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Enquiry sent successfully",
            data: enquiry,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating enquiry",
        });
    }
};

const getMyEnquiries = async (req, res) => {
    try {
        const enquiries = await Enquiry.find({ user: req.user._id }).populate("property").sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: enquiries,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching enquiries",
        });
    }
};

export { createEnquiry, getMyEnquiries };
