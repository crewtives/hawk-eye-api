import { RequestHandler } from "express";
import TeamSyncerService from "../../services/sync/team";
import MatchSyncerService from "../../services/sync/match";

const TeamSyncer = new TeamSyncerService();
const MatchSyncer = new MatchSyncerService();

export const getTeams: RequestHandler = async (req, res) => {
  try {
    const response = await TeamSyncer.sync();

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error("Error in getTeams:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getTeamPlayers: RequestHandler = async (req, res) => {
  try {
    const { teamKey } = req.params;

    if (!teamKey) {
      throw new Error("Team key is required");
    }

    const response = await TeamSyncer.getTeamPlayers(teamKey);

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error("Error in getTeamPlayers:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

export const getMatches: RequestHandler = async (req, res) => {
  try {
    const response = await MatchSyncer.sync();

    res.status(200).json({
      data: response,
    });
  } catch (error) {
    console.error("Error in getMatches:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
