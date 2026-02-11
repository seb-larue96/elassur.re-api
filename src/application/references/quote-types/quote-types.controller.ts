import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuoteTypeService } from './quote-types.service';

@ApiTags('quote-types')
@Controller('quote-types')
export class QuoteTypesController {
  constructor(private readonly quoteTypesService: QuoteTypeService) {}

  @Get('getQuoteTypes')
  @ApiOperation({ summary: 'Get all quote types' })
  @ApiResponse({ status: 200, description: 'List of all quote types' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.quoteTypesService.findAll();
  }

  @Get('getQuoteTypeById/:id')
  @ApiOperation({ summary: 'Get quote type by id' })
  @ApiResponse({ status: 200, description: 'The quote type has been successfully retrieved.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Quote type not found.' })
  findOne(@Param('id') id: number) {
    return this.quoteTypesService.findOne(id);
  }

}
