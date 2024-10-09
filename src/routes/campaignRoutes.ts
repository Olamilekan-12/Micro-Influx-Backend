import express from "express";
import CampaignController from "../controllers/CampaignController";

const router = express.Router();

router.get("/campaigns", CampaignController.fetchAllCampaigns);
router.post("/campaigns", CampaignController.createCampaign);

export default router;
