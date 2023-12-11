import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Team } from "./Team";

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "match_id", unique: true })
  matchId: string;

  @Column({ name: "country_id" })
  countryId: string;

  @Column({ name: "country_name" })
  countryName: string;

  @Column({ name: "league_id" })
  leagueId: string;

  @Column({ name: "league_name" })
  leagueName: string;

  @Column({ name: "match_date" })
  matchDate: Date;

  @Column({ name: "match_status" })
  matchStatus: string;

  @Column({ name: "match_time" })
  matchTime: string;

  @Column({ name: "match_hometeam_id" })
  matchHomeTeamId: string;

  @Column({ name: "match_hometeam_name" })
  matchHomeTeamName: string;

  @Column({ name: "match_hometeam_score" })
  matchHomeTeamScore: string;

  @Column({ name: "match_awayteam_name" })
  matchAwayTeamName: string;

  @Column({ name: "match_awayteam_id" })
  matchAwayTeamId: string;

  @Column({ name: "match_awayteam_score" })
  matchAwayTeamScore: string;

  @OneToOne(() => Team, (team) => team.homeMatch)
  @JoinColumn({ name: "match_hometeam_id", referencedColumnName: "teamKey" })
  homeTeam: Team;

  @OneToOne(() => Team, (team) => team.awayMatch)
  @JoinColumn({ name: "match_awayteam_id", referencedColumnName: "teamKey" })
  awayTeam: Team;
}
