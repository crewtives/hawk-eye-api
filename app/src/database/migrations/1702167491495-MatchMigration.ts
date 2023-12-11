import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateMatchEntity1638930152063 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // Create Match table
    await queryRunner.createTable(
      new Table({
        name: "match",
        columns: [
          { name: "id", type: "serial", isPrimary: true },
          { name: "match_id", type: "varchar", isUnique: true }, // Make it unique
          { name: "country_id", type: "varchar" },
          { name: "country_name", type: "varchar" },
          { name: "league_id", type: "varchar" },
          { name: "league_name", type: "varchar" },
          { name: "match_date", type: "date" },
          { name: "match_status", type: "varchar" },
          { name: "match_time", type: "varchar" },
          { name: "match_hometeam_id", type: "varchar" },
          { name: "match_hometeam_name", type: "varchar" },
          { name: "match_hometeam_score", type: "varchar" },
          { name: "match_awayteam_name", type: "varchar" },
          { name: "match_awayteam_id", type: "varchar" },
          { name: "match_awayteam_score", type: "varchar" },
        ],
      }),
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Drop Match table
    await queryRunner.dropTable("match");
  }
}
