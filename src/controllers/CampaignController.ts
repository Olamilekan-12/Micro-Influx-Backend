import express, { Request, Response } from "express";
import Campaigns from "../models/campaign";
import { request } from "http";

const fetchAllCampaigns = async (request: Request, response: Response) => {
  try {
    const campaigns = await Campaigns.find();
    if (!campaigns || !campaigns.length) {
      return response.status(404).json({ message: "No campaigns found" });
    }
    return response.status(200).send(campaigns);
  } catch (error) {
    console.log(error, "Something  went wrong");
    return response.status(500).send(error);
  }
};

const createCampaign = async (request: Request, response: Response) => {
  try {
    const campaign = new Campaigns(request.body);
    await campaign.save();
    return response.status(201).send(campaign);
  } catch (error) {
    console.log(error, "Something  went wrong");
    return response.status(500).send(error);
  }
};

export default {
  fetchAllCampaigns,
  createCampaign,
};
