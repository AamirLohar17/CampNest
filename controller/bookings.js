
const Booking = require("../models/Booking.js");
const Listing = require("../models/listing.js");

// Create Booking Request
module.exports.createBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const { checkIn, checkOut, guests } = req.body;

    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const guestCount = Number(guests);

    // Validate dates and guest count
    if (
      !checkIn ||
      !checkOut ||
      Number.isNaN(start.getTime()) ||
      Number.isNaN(end.getTime()) ||
      start < new Date(new Date().toDateString()) ||
      end <= start ||
      !Number.isInteger(guestCount) ||
      guestCount < 1
    ) {
      req.flash("error", "Please select valid dates and guest count.");
      return res.redirect(`/listings/${id}`);
    }

    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing not found.");
      return res.redirect("/listings");
    }

    // Owner cannot book their own listing
    if (listing.owner.toString() === req.user._id.toString()) {
      req.flash("error", "You cannot book your own listing.");
      return res.redirect(`/listings/${id}`);
    }

    // Prevent overlapping pending or confirmed bookings
    const conflict = await Booking.findOne({
      listing: id,
      status: { $in: ["Pending", "Confirmed"] },
      checkIn: { $lt: end },
      checkOut: { $gt: start },
    });

    if (conflict) {
      req.flash(
        "error",
        "These dates are unavailable. Please select different dates."
      );
      return res.redirect(`/listings/${id}`);
    }

    const booking = new Booking({
      listing: id,
      guest: req.user._id,
      checkIn: start,
      checkOut: end,
      guests: guestCount,
      status: "Pending",
    });

    await booking.save();

    req.flash("success", "Booking request sent to the host!");
    res.redirect(`/listings/${id}`);
  } catch (error) {
    console.error("Booking creation error:", error);
    req.flash("error", "Could not create booking. Please try again.");
    res.redirect("/listings");
  }
};


module.exports.renderBookingRequests = async (req, res) => {
  const { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found.");
    return res.redirect("/listings");
  }

  if (listing.owner.toString() !== req.user._id.toString()) {
    req.flash("error", "Not authorized.");
    return res.redirect(`/listings/${id}`);
  }

  const bookings = await Booking.find({ listing: id })
    .populate("guest", "username")
    .sort({ createdAt: -1 });

  res.render("listings/booking-requests.ejs", {
    listing,
    bookings,
  });
};

module.exports.approveBooking = async (req, res) => {
  const { id, bookingId } = req.params;
  const listing = await Listing.findById(id);

  if (!listing || listing.owner.toString() !== req.user._id.toString()) {
    req.flash("error", "Not authorized.");
    return res.redirect("/listings");
  }

  const booking = await Booking.findOne({
    _id: bookingId,
    listing: id,
    status: "Pending",
  });

  if (!booking) {
    req.flash("error", "Pending booking not found.");
    return res.redirect(`/listings/${id}/bookings/manage`);
  }

  const conflict = await Booking.findOne({
    _id: { $ne: booking._id },
    listing: id,
    status: "Confirmed",
    checkIn: { $lt: booking.checkOut },
    checkOut: { $gt: booking.checkIn },
  });

  if (conflict) {
    req.flash("error", "Dates conflict with another confirmed booking.");
    return res.redirect(`/listings/${id}/bookings/manage`);
  }

  booking.status = "Confirmed";
  await booking.save();

  req.flash("success", "Booking approved!");
  res.redirect(`/listings/${id}/bookings/manage`);
};

module.exports.rejectBooking = async (req, res) => {
  const { id, bookingId } = req.params;
  const listing = await Listing.findById(id);

  if (!listing || listing.owner.toString() !== req.user._id.toString()) {
    req.flash("error", "Not authorized.");
    return res.redirect("/listings");
  }

  const booking = await Booking.findOne({
    _id: bookingId,
    listing: id,
    status: "Pending",
  });

  if (!booking) {
    req.flash("error", "Pending booking not found.");
    return res.redirect(`/listings/${id}/bookings/manage`);
  }

  booking.status = "Rejected";
  await booking.save();

  req.flash("success", "Booking rejected.");
  res.redirect(`/listings/${id}/bookings/manage`);
};