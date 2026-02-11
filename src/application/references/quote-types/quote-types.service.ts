import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { QuoteType } from './entities/quote-type.entity';
import { EntityRepository } from '@mikro-orm/mysql';
import { mapToQuoteTypeResponseDto } from './mapper/quote-type.mapper';

@Injectable()
export class QuoteTypeService {

  constructor(
    @InjectRepository(QuoteType)
    private readonly quoteTypeRepository: EntityRepository<QuoteType>
  ) {}

  async findAll() {
    const quoteTypes = await this.quoteTypeRepository.find({ status: { $ne: 'D' } });
    return quoteTypes.map(quoteType => mapToQuoteTypeResponseDto(quoteType));
  }

  async findOne(id: number) {
    const quoteType = await this.quoteTypeRepository.findOne({ id, status: { $ne: 'D' } });
    
    if (!quoteType) throw new NotFoundException(`Quote Type with id ${id} not found`);

    return mapToQuoteTypeResponseDto(quoteType);
  }

}
