import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientTypeService } from './client-types.service';

@ApiTags('client-types')
@Controller('client-types')
export class ClientTypesController {
  constructor(private readonly clientTypesService: ClientTypeService) {}

  @Get('getClientTypes')
  @ApiOperation({ summary: 'Get all client types' })
  @ApiResponse({ status: 200, description: 'List of all client types' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.clientTypesService.findAll();
  }

  @Get('getClientTypeById/:id')
  @ApiOperation({ summary: 'Get client type by id' })
  @ApiResponse({ status: 200, description: 'The client type has been successfully retrieved.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiResponse({ status: 404, description: 'Client type not found.' })
  findOne(@Param('id') id: string) {
    return this.clientTypesService.findOne(+id);
  }

}
