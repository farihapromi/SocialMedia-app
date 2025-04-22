import multer from 'multer';
import path from 'path';

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Ensure this folder exists in your project directory
  },
  filename: function (req, file, cb) {
    // Generate unique filename using current timestamp and original file name
    cb(null, Date.now() + path.extname(file.originalname)); // Use the file extension
  },
});

// Initialize multer with storage configuration
const uploads = multer({ storage: storage });

export default uploads;
