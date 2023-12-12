// eslint-disable-next-line import/no-extraneous-dependencies
const multer = require("multer");

exports.upload = (folderName) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `uploads/${folderName}/`);
    },
    filename: (req, file, cb) => {
      // cb(null, `${Date.now()}-${file.originalname}`);
      cb(null, file.originalname);
    },
  });

  return multer({ storage });
};
