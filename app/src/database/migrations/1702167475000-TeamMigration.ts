import { MigrationInterface, QueryRunner } from "typeorm";

export class TeamMigration1702167475000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      CREATE TABLE "team" (
        "id" SERIAL NOT NULL,
        "team_key" character varying NOT NULL UNIQUE,
        "team_name" character varying,
        "team_country" character varying,
        "team_founded" integer,
        "team_badge" character varying,
        "coach" jsonb,
        "players" jsonb,
        CONSTRAINT "PK_1234567890abcdef" PRIMARY KEY ("id")
      );
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "team"`);
  }
}
