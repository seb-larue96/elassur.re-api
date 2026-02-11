import { ApiProperty } from "@nestjs/swagger";

export class QuoteTypeResponseDto {
    @ApiProperty()
    readonly id: number;

    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly description: string;
}