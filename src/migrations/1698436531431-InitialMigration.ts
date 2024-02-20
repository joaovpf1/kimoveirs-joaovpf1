import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1698436531431 implements MigrationInterface {
    name = 'InitialMigration1698436531431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" numeric NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" date NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" date NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "updatedAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "createdAt"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "createdAt" TIMESTAMP NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "realEstates" DROP COLUMN "value"`);
        await queryRunner.query(`ALTER TABLE "realEstates" ADD "value" integer NOT NULL DEFAULT '0'`);
    }

}
