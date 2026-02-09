import { Seeder } from "@mikro-orm/seeder";
import { EntityManager } from "@mikro-orm/core";
import { RoleSeeder } from "./role.seeder";

export class DatabaseSeeder extends Seeder {
    async run (em: EntityManager): Promise<void> {
        await this.call(em, [RoleSeeder]);
    }
}