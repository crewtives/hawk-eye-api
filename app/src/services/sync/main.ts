import MatchSyncerService from "./match";
import TeamSyncerService from "./team";

class MainSyncerService {
  private teamSyncerService: TeamSyncerService;
  private matchSyncerService: MatchSyncerService;

  constructor() {
    this.teamSyncerService = new TeamSyncerService();
    this.matchSyncerService = new MatchSyncerService();
  }

  public async sync(useDatabaseResponse = true): Promise<string> {
    const teamsPromise = this.teamSyncerService.sync(useDatabaseResponse);
    const matchesPromise = this.matchSyncerService.sync(useDatabaseResponse);

    const [teams, matches] = await Promise.all([teamsPromise, matchesPromise]);

    console.log("synced");

    return "Synced";
  }
}

export default MainSyncerService;
