import { Seeder } from "@mikro-orm/seeder";
import { EntityManager } from "@mikro-orm/core";
import { ClientTypeSeeder } from "./client-type.seeder";
import { RoleSeeder } from "./role.seeder";

export class DatabaseSeeder extends Seeder {
    async run (em: EntityManager): Promise<void> {
        await this.call(em, [ClientTypeSeeder, RoleSeeder]);
    }
}