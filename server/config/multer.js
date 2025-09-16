const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('./path/to/your/cloudinary/config'); // the module you just exported

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'your-folder-name', // e.g., 'products'
        allowed_formats: ['jpg', 'png', 'jpeg'],
        transformation: [{ width: 800, height: 800, crop: 'limit' }]
    }
});

const upload = multer({ storage });
module.exports = upload;
