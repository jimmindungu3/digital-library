const mongoose = require("mongoose");

const materialSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    subject: {
      type: String,
      required: true,
      enum: [
        "English & Literature",
        "Kiswahili",
        "Mathematics",
        "Biology",
        "Physics",
        "Chemistry",
        "History and Government",
        "Geography",
        "Christian Religious Education",
        "Agriculture",
        "Computer Studies",
        "Business Studies",
      ],
    },
    gradeLevel: {
      type: String,
      enum: [
        "Form 1",
        "Form 2",
        "Form 3",
        "Form 4",
        "Grade 6",
        "Grade 7",
        "Grade 8",
        "Grade 9",
        "Grade 10",
      ],
    },
    fileType: {
      type: String,
      required: true,
      enum: ["PDF", "Video", "PPT", "Word", "Image"],
    },
    tags: {
      type: [String],
      default: [],
    },
    fileName: {
      type: String,
      required: true,
    },
    fileSize: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    uploadDate: {
      type: Date,
      default: Date.now,
    },
    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// Add text index for searching
materialSchema.index({
  title: "text",
  description: "text",
  tags: "text",
});

const Material = mongoose.model("Material", materialSchema);

module.exports = Material;
