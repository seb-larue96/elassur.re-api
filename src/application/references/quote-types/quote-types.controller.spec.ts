import { Test, TestingModule } from '@nestjs/testing';
import { QuoteTypesController } from './quote-types.controller';
import { QuoteTypeService } from './quote-types.service';

describe('QuoteTypesController', () => {
  let controller: QuoteTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteTypesController],
      providers: [QuoteTypeService],
    }).compile();

    controller = module.get<QuoteTypesController>(QuoteTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
