import { EntityManager } from "@mikro-orm/mysql";
import { Seeder } from "@mikro-orm/seeder";

export class ClientTypeSeeder extends Seeder {
    async run(em: EntityManager): Promise<void> {
        const clientTypes = [
            {name: 'Particulier', status: 'I'},
            {name: 'Professionnel', status: 'I'},
        ];

        for (const clientTypeData of clientTypes) {
            const existing = await em.findOne('ClientType', { name: clientTypeData.name });
            if (!existing) {
                em.create('ClientType', clientTypeData);
            }
        }
    }
}