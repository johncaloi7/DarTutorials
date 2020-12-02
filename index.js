const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

// DEFINE PATH
const publicDirectoryPath = path.join(__dirname, './public');

// LOAD TEMPLATES AND INITIALIZE STATIC FILES
app.set('view engine', 'ejs')
app.use(express.static(publicDirectoryPath))

//LOAD ENV VARS
dotenv.config({ path: "./config/config.env" });

// IMPORT ROUTES
const homepage = require("./routes/home");
const service = require("./routes/service");
const about = require("./routes/about");

// MOUNT THE ROUTES
app.use("/", homepage);
app.use("/service", service);
app.use("/about", about);

// SERVER RUN
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is now running at port ${PORT}`);
});
