import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { ClientTypeService } from './client-types.service';
import { ClientTypesController } from './client-types.controller';

@Module({
  imports: [
    MikroOrmModule.forFeature(['ClientType'])
  ],
  controllers: [ClientTypesController],
  providers: [ClientTypeService],
})
export class ClientTypesModule {}
