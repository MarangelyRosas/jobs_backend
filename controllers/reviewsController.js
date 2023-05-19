const express = require("express");
const reviews = express.Router({ mergeParams: true });
const validateReview = require("../validations/validateReview.js");
const {
  getAllReviews,
  getReview,
  createReview,
  deleteReview,
  updateReview,
} = require("../queries/reviews.js");

// Index (all reviews)
reviews.get("/", async (req, res) => {
  const { jobId } = req.params;
  const { error, result } = await getAllReviews(jobId);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

//   try {
//   const allReviews = await getAllReviews(jobId);
//   res.json(allReviews);
// } catch (err) {
//   res.json(err);
// }
// });


// Show (one/individual review)
reviews.get("/:reviewId", async (req, res) => {
  console.log(req.params);
  const { reviewId } = req.params;
  const { error, result } = await getReview(reviewId);
  if (error?.code === 0) {
    res.status(404).json({ error: "Review not found" });
  } else if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

// Create (new review)
reviews.post("/", validateReview, async (req, res) => {
  const { error, result } = await createReview(req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(201).json(result);
  }
});

// Update Review
reviews.put("/:reviewId", validateReview, async (req, res) => {
  const { reviewId } = req.params;
  const { error, result } = await updateReview(reviewId, req.body);
  if (error) {
    res.status(500).json({ error: "server error" });
  } else {
    res.status(200).json(result);
  }
});

reviews.delete("/:reviewId", async (req, res) => {
  const { reviewId } = req.params;
  const { error, result } = await deleteReview(reviewId);
  if (error) {
    res.status(404).json("Review not found");
  } else {
    res.status(201).json(result);
  }
});

module.exports = reviews;