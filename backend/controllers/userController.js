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
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters",
      });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });

    const token = generateToken(user._id);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      token,
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

// LOGIN
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
      message: "Login successful",
      token,
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
      message: "Error logging in user",
      error: error.message,
    });
  }
};

// PROFILE
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

// SAVE PROPERTY
const saveProperty = async (req, res) => {
  try {
    const user = req.user;
    const propertyId = req.params.propertyId;

    if (user.savedProperties.includes(propertyId)) {
      return res.status(400).json({
        success: false,
        message: "Property already saved",
      });
    }

    user.savedProperties.push(propertyId);
    await user.save();

    return res.status(200).json({
      success: true,
      message: "Property saved successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error saving property",
    });
  }
};

// GET SAVED PROPERTIES
const getSavedProperties = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).populate("savedProperties");

    return res.status(200).json({
      success: true,
      data: user.savedProperties,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching saved properties",
    });
  }
};

export {
  registerUser,
  loginUser,
  getUserProfile,
  saveProperty,
  getSavedProperties,
};