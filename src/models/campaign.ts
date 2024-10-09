import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  initials: {
    type: String,
    required: true,
  },
  campaignTitle: {
    type: String,
    required: true,
  },
  brandName: {
    type: String,
    required: true,
  },
  campaignCategory: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  campaignDescription: {
    type: String,
    required: true,
  },
  channels: {
    type: [String],
    required: true,
  },
  minimumBudget: {
    type: Number,
    required: true,
  },
  maximumBudget: {
    type: Number,
    required: true,
  },
});

const Campaigns = mongoose.model("Campaign", campaignSchema);
export default Campaigns;
