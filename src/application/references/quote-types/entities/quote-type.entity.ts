import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class QuoteType {
    @PrimaryKey()
    id: number;

    @Property()
    name: string;

    @Property()
    description: string;

    @Property()
    status: string;
}