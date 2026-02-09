import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { RoleService } from './roles.service';
import { RolesController } from './roles.controller';

@Module({
  imports: [
    MikroOrmModule.forFeature(['Role'])
  ],
  controllers: [RolesController],
  providers: [RoleService],
})
export class RolesModule {}
