const cloudinary = require('cloudinary').v2;

exports.uploadImageToCloudinary = async (file, folder, height, quility) => {
    if (height) {
        option.height = height;
    }
    if (quility) {
        option.quility = quility;
    }
    option.resource_type = "auto";

    return await cloudinary.uploader.upload(file.tempFilePath, options);
} 