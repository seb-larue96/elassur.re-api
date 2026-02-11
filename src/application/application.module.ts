import { Module } from "@nestjs/common";
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ClientTypesModule } from './references/client-types/client-types.module';
import { QuoteTypesModule } from "./references/quote-types/quote-types.module";
import { RolesModule } from './roles/roles.module';

@Module({
    imports: [AuthModule, UsersModule, ClientTypesModule, QuoteTypesModule, RolesModule]
})

export class ApplicationModule {}