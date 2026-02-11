import { QuoteTypeResponseDto } from "../dto/quote-type-response.dto";
import { QuoteType } from "../entities/quote-type.entity";

export function mapToQuoteTypeResponseDto(quoteType: QuoteType): QuoteTypeResponseDto {
    return {
        id: quoteType.id,
        name: quoteType.name,
        description: quoteType.description,
    }
} 