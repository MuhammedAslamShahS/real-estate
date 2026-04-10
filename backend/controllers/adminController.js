import jwt from "jsonwebtoken";

const loginAdmin = async (req, res) => {
    try {
        const { name, id, password } = req.body;

        if (!name || !id || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const isvalidAdmin =
            name === process.env.ADMIN_NAME && id === process.env.ADMIN_ID && password === process.env.ADMIN_PASSWORD;

        if (!isvalidAdmin) {
            return res.status(401).json({
                success: false,
                message: "Invalid admin credentials",
            });
        }

        const token = jwt.sign(
            {
                name: process.env.ADMIN_NAME,
                id: process.env.ADMIN_ID,
                role: "admin",
            },
            process.env.JWT_SECRET,
            { expiresIn: "1d" },
        );

        return res.status(200).json({
            success: true,
            message: "Admin login successfull",
            token,
            admin: {
                name: process.env.ADMIN_NAME,
                id: process.env.ADMIN_ID,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error during admin login",
            error: error.message,
        });
    }
};

export { loginAdmin };
