import express from "express";
import { forceSync } from "../controllers/preferences";
import {
  getMatches,
  getTeams,
  getTeamPlayers,
} from "../controllers/footballApi";

const root = express.Router();

root.get("/getTeams", getTeams);
root.get("/getTeamPlayers/:teamKey", getTeamPlayers);
root.get("/getMatches", getMatches);

root.get("/forceSync", forceSync);

export default root;
