import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Match } from "./Match";

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: "team_key", type: "varchar", unique: true, nullable: true })
  teamKey: string;

  @Column({ name: "team_name" })
  teamName: string;

  @Column({ name: "team_country" })
  teamCountry: string;

  @Column({ name: "team_founded" })
  teamFounded: number;

  @Column({ name: "team_badge" })
  teamBadge: string;

  @Column("simple-json")
  coach: {
    coachName: string;
    coachCountry: string;
    coachAge: number;
  };

  @Column("simple-json")
  players: {
    playerKey: string;
    playerName: string;
    playerNumber: string;
    playerCountry: string;
    playerType: string;
    playerAge: number;
  }[];

  @OneToMany(() => Match, (match) => match.homeTeam)
  homeMatch: Match[];

  @OneToMany(() => Match, (match) => match.awayTeam)
  awayMatch: Match[];
}
