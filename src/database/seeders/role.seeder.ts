import { EntityManager } from "@mikro-orm/mysql";
import { Seeder } from "@mikro-orm/seeder";

export class RoleSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        const roles = [
            {name: 'Administrator', status: 'I'},
            {name: 'Developper', status: 'I'},
        ];

        for (const roleData of roles) {
            const existing = await em.findOne('Role', { name: roleData.name });
            if (!existing) {
                em.create('Role', roleData);
            }
        }
    }
}