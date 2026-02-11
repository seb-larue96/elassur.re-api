import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { ClientType } from './entities/client-type.entity';
import { mapToClientTypeResponseDto } from './mapper/client-type.mapper';
import { ClientTypeResponseDto } from './dto/client-type-response.dto';

@Injectable()
export class ClientTypeService {

  constructor(
    @InjectRepository(ClientType)
    private readonly clientTypeRepository: EntityRepository<ClientType>
  ) {}

  async findAll(): Promise<ClientTypeResponseDto[]> {
    const clientTypes = await this.clientTypeRepository.find({ status: { $ne: 'D' } });
    return clientTypes.map(clientType => mapToClientTypeResponseDto(clientType));
  }

  async findOne(id: number): Promise<ClientTypeResponseDto> {
    const clientType = await this.clientTypeRepository.findOne({ id, status: { $ne: 'D' } });

    if (!clientType) throw new NotFoundException(`Client Type with id ${id} not found`);

    return mapToClientTypeResponseDto(clientType);
  }

}
