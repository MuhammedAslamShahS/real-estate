import jwt from "jsonwebtoken";

const protectAdmin = (req, res, next) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token, authorization denied",
            });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.admin = decoded;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid token",
        });
    }
};

export { protectAdmin };
