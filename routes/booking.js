const express = require("express");
const router = express.Router({ mergeParams: true });

const { isLoggedIn } = require("../middleware.js");
const bookingController = require("../controller/bookings.js");

// Create booking request
router.post("/", isLoggedIn, bookingController.createBooking);

router.get("/manage", isLoggedIn, bookingController.renderBookingRequests);

router.post(
  "/:bookingId/approve",
  isLoggedIn,
  bookingController.approveBooking,
);

router.post("/:bookingId/reject", isLoggedIn, bookingController.rejectBooking);

module.exports = router;