import axios, { AxiosInstance, AxiosResponse } from "axios";
import config from "../../config";

interface GetMatchesParams {
  teamId?: string;
  from: string;
  to: string;
}

class FootballAPI {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      params: {
        APIkey: config.footballApiKey,
      },
    });
  }

  private async get(
    url: string,
    params?: Record<string, any>
  ): Promise<AxiosResponse> {
    return await this.axiosInstance.get(url, { params });
  }

  public async getLeagues(countryId?: string): Promise<AxiosResponse> {
    return await this.get("/", {
      action: "get_leagues",
      country_id: countryId || "6",
    });
  }

  public async getTeams(leagueId: string): Promise<AxiosResponse> {
    return await this.get("/", {
      action: "get_teams",
      league_id: leagueId,
    });
  }

  public async getTeam(teamId: string): Promise<AxiosResponse> {
    return await this.get("/", {
      action: "get_teams",
      team_id: teamId,
    });
  }

  public async getMatches(params: GetMatchesParams): Promise<AxiosResponse> {
    const { teamId, from, to } = params;
    const url = "/?action=get_events";
    const queryParams = { from, to };

    return await this.get(
      teamId ? `${url}&team_id=${teamId}` : url,
      queryParams
    );
  }

  public async getMatch(matchId: string): Promise<AxiosResponse> {
    return await this.get("/", {
      action: "get_events",
      match_id: matchId,
    });
  }
}

export default FootballAPI;
