import { DataSource } from "typeorm";
import { Team } from "./database/entity/Team";
import { Match } from "./database/entity/Match";
import { TeamMigration1702167475000 } from "./database/migrations/1702167475000-TeamMigration";
import { CreateMatchEntity1638930152063 } from "./database/migrations/1702167491495-MatchMigration";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "hawk-eye-db",
  port: 5432,
  username: "root",
  password: "password",
  database: "hawk-eye-api",
  synchronize: false,
  logging: true,
  entities: [Team, Match],
  subscribers: [],
  migrations: [TeamMigration1702167475000, CreateMatchEntity1638930152063],
});
