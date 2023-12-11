import { RequestHandler } from "express";
import MainSyncerService from "../../services/sync/main";

const mainSyncerService = new MainSyncerService();

export const forceSync: RequestHandler = async (_req, res) => {
  const response = await mainSyncerService.sync(false);

  res.status(200).json({
    data: response,
  });
};
