const express = require("express");
const rateLimit = require("express-rate-limit"); //limit ai request.
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ai = require("../utils/gemini.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controller/listings.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

//Index Route or Create Route
router
  .route("/")
  .get(wrapAsync(listingController.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing),
  );

//New Route
router.get("/new", isLoggedIn, listingController.renderNewForm);

const aiDescriptionLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 4, // maximum 10 AI requests per hour
  message: {
    error: "Too many AI requests. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// AI Description Generator
router.post(
  "/ai/generate-description",
  isLoggedIn,
  aiDescriptionLimiter,
  async (req, res) => {
    try {
      const { title, location, category } = req.body;

      if (!title?.trim() || !location?.trim() || !category?.trim()) {
        return res.status(400).json({
          error: "Title, location and category are required.",
        });
      }

      if (title.length > 100 || location.length > 100 || category.length > 50) {
        return res.status(400).json({
          error: "Input is too long.",
        });
      }

      const prompt = `Write a short, attractive accommodation listing description for CampNest.

      Title: ${title}
      Location: ${location}
      Category: ${category}

      Write 1-2 sentences. Keep it natural, inviting, and suitable for a mountain cabin or camping accommodation. Do not use emojis.`;

      let response;

      try {
        // First model
        response = await ai.models.generateContent({
          model: "gemini-3.7-flash",
          contents: prompt,
        });
      } catch (error) {
        // If first model is temporarily unavailable, use fallback
        if (error.status === 503) {
          console.log("Gemini 3.7 busy. Trying fallback model...");

          response = await ai.models.generateContent({
            model: "gemini-3.6-flash",
            contents: prompt,
          });
        } else {
          throw error;
        }
      }

      res.json({
        description: response.text,
      });
    } catch (error) {
      console.error("AI ERROR:", error);

      res.status(500).json({
        error: "AI service is temporarily unavailable. Please try again.",
      });
    }
  },
);

//Listing - Show , Update, & Delete Route
router
  .route("/:id")
  .get(wrapAsync(listingController.showListing))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditListing),
);

module.exports = router;
