import {MigrationInterface, QueryRunner, } from "typeorm";

export class createOrphaneges1603325925657 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query('CREATE TABLE "orfanato"');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        //await queryRunner.query('DROP TABLE "orfanato"');
    }

}
