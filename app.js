const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const { readdirSync } = require("fs");

//const router = require("./src/routes/api");
const app = express();
const path = require("path");

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(mongoSanitize());
app.use(hpp());

// Rate limiting
app.use(
  "/api/v1",
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes, limit each IP to 100 request
    max: 100,
  })
);

// routes middleware
readdirSync("./src/route").map((r) =>
  app.use("/api/v1", require(`./src/route/${r}`))
);

// Routes
//app.use("/api/v1", router);

//home route
app.get("/", (req, res) => {
  res.send("Hello home page");
});

//home route
app.get("*", (req, res) => {
  res.send("Error! 404 not found route");
});

// Connect to MongoDB  // al8iCNtoR1QSpK3w
mongoose
  .connect(
    "mongodb+srv://nazmul16:al8iCNtoR1QSpK3w@cluster0.eoh0lec.mongodb.net/ecom4",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

module.exports = app;
