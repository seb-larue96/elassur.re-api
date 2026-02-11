import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class ClientType {
    @PrimaryKey()
    id: number;

    @Property()
    name: string;

    @Property()
    status: string;
}
