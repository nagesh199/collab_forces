const allowedOrigins = require("./allowedOrigins");

const corsOptions = {
  origin: (origin, callback) => {
    // if the origin is present in the list
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true); //no error and giving allowance for the origin
    } else {
      callback(new Error("Not allowed by CORS")); //error
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
