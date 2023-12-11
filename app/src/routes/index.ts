import express from "express";
import { forceSync } from "../controllers/preferences";
import {
  getMatches,
  getTeams,
  getTeamPlayers,
  getTeamMatches,
} from "../controllers/footballApi";

const root = express.Router();

root.get("/teams", getTeams);
root.get("/teams/:teamKey/players", getTeamPlayers);
root.get("/teams/:teamKey/matches", getTeamMatches);

root.get("/matches", getMatches);

root.get("/forceSync", forceSync);

export default root;
