import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (userId) => {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d",
    });
};

// REGISTER
const registerUser = async (req, res) => {
    try {
        const { name, email, phone, password } = red.body;

        if (!name || !email || !phone || !password) {
            return res.status(400).json({
                success: false,
                message: "All feilds are required",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Please password must be atleast 6 charac",
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User alredy exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await user.create({
            name,
            email,
            phone,
            password: hashedPassword,
        });

        const token = generateToken(user._id);

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                phone: user.phone,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
        });
    }
};

// Login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const token = generateToken(user._id);

        return res.status(200).json({
            success: true,
            message: "Login successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                emai: user.emai,
                phone: user.phone,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error login in user",
            error: error.message,
        });
    }
};

// Profile
const getUserProfile = async (req, res) => {
    try {
        return res.status(200).json({
            success: true,
            user: req.user,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Error fetching profile",
        });
    }
};

export { registerUser, loginUser, getUserProfile };
