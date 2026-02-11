import { Test, TestingModule } from '@nestjs/testing';
import { QuoteTypeService } from './quote-types.service';

describe('QuoteTypesService', () => {
  let service: QuoteTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteTypeService],
    }).compile();

    service = module.get<QuoteTypeService>(QuoteTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
