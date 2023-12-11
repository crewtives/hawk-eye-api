import config from "../../config";
import FootballAPI from "../footballAPI";
import { AppDataSource } from "../../data-source";
import { Team } from "../../database/entity/Team";
import { Match } from "../../database/entity/Match";

class MatchSyncerService {
  private footballAPI: FootballAPI;

  constructor() {
    this.footballAPI = new FootballAPI(config.footballApiUrl);
  }

  public async sync(useDatabaseResponse = true): Promise<Match[]> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const teamRepository = AppDataSource.getRepository(Team);
    const matchRepository = AppDataSource.getRepository(Match);

    if (useDatabaseResponse) {
      const matchesFromDB = await matchRepository.find();

      if (matchesFromDB.length) {
        return matchesFromDB;
      }
    }

    const teams = await teamRepository.find();

    teams.forEach(async (team) => {
      const { teamKey } = team;
      const from = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
      const to = new Date();

      this.footballAPI
        .getMatches({
          teamId: teamKey,
          from: from.toISOString(),
          to: to.toISOString(),
        })
        .then((response) => {
          const matches = response.data;

          const matchesToSave = matches.map((match: any) => {
            const {
              match_id,
              country_id,
              country_name,
              league_id,
              league_name,
              match_date,
              match_status,
              match_time,
              match_hometeam_id,
              match_hometeam_name,
              match_hometeam_score,
              match_awayteam_id,
              match_awayteam_name,
              match_awayteam_score,
            } = match;

            return matchRepository.create({
              matchId: match_id,
              countryId: country_id,
              countryName: country_name,
              leagueId: league_id,
              leagueName: league_name,
              matchDate: match_date,
              matchStatus: match_status,
              matchTime: match_time,
              matchHomeTeamId: match_hometeam_id,
              matchHomeTeamName: match_hometeam_name,
              matchHomeTeamScore: match_hometeam_score,
              matchAwayTeamId: match_awayteam_id,
              matchAwayTeamName: match_awayteam_name,
              matchAwayTeamScore: match_awayteam_score,
            });
          });

          matchRepository.upsert(matchesToSave, ["matchId"]);
        })
        .catch((error) => {
          console.error("Error in getMatches:", error);
        });
    });

    const matchesFromDB = await matchRepository.find();

    return matchesFromDB;
  }

  public async getTeamMatches(teamKey: string): Promise<Match[]> {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }

    const matchRepository = AppDataSource.getRepository(Match);

    const matchesFromDB = await matchRepository.find({
      where: [{ matchHomeTeamId: teamKey }, { matchAwayTeamId: teamKey }],
    });

    return matchesFromDB;
  }
}

export default MatchSyncerService;
