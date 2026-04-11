import jwt from "jsonwebtoken";
import User from "../models/User";

const userAuth = async (req, res) => {
    try {
        const token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "No token, authorization denied",
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decode.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        req.user = user;

        next();
    } catch (error) {
        return res.status(404).json({
            success: false,
            message: "Invalid token",
        });
    }
};

export default userAuth;
