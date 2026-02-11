import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { QuoteTypeService } from './quote-types.service';
import { QuoteTypesController } from './quote-types.controller';

@Module({
  imports: [
    MikroOrmModule.forFeature(['QuoteType'])
  ],
  controllers: [QuoteTypesController],
  providers: [QuoteTypeService],
})
export class QuoteTypesModule {}
