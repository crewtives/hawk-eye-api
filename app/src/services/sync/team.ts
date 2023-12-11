import config from "../../config";
import FootballAPI from "../footballAPI";
import { AppDataSource } from "../../data-source";
import { Team } from "../../database/entity/Team";

class TeamSyncerService {
  private footballAPI: FootballAPI;

  constructor() {
    this.footballAPI = new FootballAPI(config.footballApiUrl);
  }

  public async sync(useDatabaseResponse = true): Promise<Team[]> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const teamRepository = AppDataSource.getRepository(Team);

    if (useDatabaseResponse) {
      const teamsFromDB = await teamRepository.find();

      if (teamsFromDB.length) {
        return teamsFromDB;
      }
    }

    const response = await this.footballAPI.getTeams("302");

    const teams = response.data;

    const teamsToSave = teams.map((team: any) => {
      const {
        team_key,
        team_name,
        team_country,
        team_founded,
        team_badge,
        coaches,
        players,
      } = team;

      return teamRepository.create({
        teamKey: team_key,
        teamName: team_name,
        teamCountry: team_country,
        teamFounded: team_founded,
        teamBadge: team_badge,
        coach: coaches[0],
        players,
      });
    });

    await teamRepository.upsert(teamsToSave, ["teamKey"]);

    const teamsFromDB = await teamRepository.find();

    return teamsFromDB;
  }

  public async getTeamPlayers(teamKey: string): Promise<any> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const teamRepository = AppDataSource.getRepository(Team);

    const team = await teamRepository.findOne({ where: { teamKey } });

    if (!team) {
      throw new Error("Team not found");
    }

    return team.players;
  }
}

export default TeamSyncerService;
