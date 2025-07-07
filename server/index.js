const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const Material = require("./models/file");
const cors = require("cors");

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();
const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set up multer for file handling
const upload = multer({ storage: multer.memoryStorage() });

// Upload endpoint
app.post("/api/materials", upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    // Upload file to Cloudinary
    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );

      stream.end(req.file.buffer);
    });

    // Create material document
    const material = new Material({
      title: req.body.title,
      description: req.body.description,
      subject: req.body.subject,
      gradeLevel: req.body.gradeLevel,
      fileType: req.body.fileType,
      tags: req.body.tags
        ? req.body.tags.split(",").map((tag) => tag.trim())
        : [],
      fileName: req.file.originalname,
      fileSize: (req.file.size / (1024 * 1024)).toFixed(2) + " MB",
      filePath: result.secure_url,
      uploadedBy: req.body.userId,
    });

    await material.save();

    res.status(201).json({
      message: "File uploaded successfully",
      material,
    });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Failed to upload file" });
  }
});

// Get materials endpoint
app.get("/api/materials", async (req, res) => {
  try {
    const materials = await Material.find().sort({ uploadDate: -1 });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch materials" });
  }
});

mongoose
  .connect(mongoURI, {})
  .then(() => {
    app.listen(PORT, () =>
      console.log(
        ` ####################### Server running on port ${PORT} ####################### `
      )
    );
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
