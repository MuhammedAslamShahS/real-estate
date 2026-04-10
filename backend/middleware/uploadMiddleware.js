import multer from "multer";
import path from "path";

// storage config
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueName + path.extname(file.originalname));
    },
});

// this is for filtering file for only images
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const isValid = allowedTypes.test(file.mimeType);

    if (!isValid) {
        cb(null, true);
    } else {
        cb("Only image file allowed", false);
    }
};

const upload = multer({
    storage,
    fileFilter,
});

export default upload;
