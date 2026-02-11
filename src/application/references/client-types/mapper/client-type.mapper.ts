import { ClientTypeResponseDto } from "../dto/client-type-response.dto";
import { ClientType } from "../entities/client-type.entity";

export function mapToClientTypeResponseDto(clientType: ClientType): ClientTypeResponseDto {
    return {
        id: clientType.id,
        name: clientType.name,
    }
}