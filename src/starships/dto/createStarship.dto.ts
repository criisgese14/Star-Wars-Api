import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateStarshipDto {
    @ApiProperty({
        description: 'title of the starship',
        example: 'starship 01'
    })
    @IsString()
    name: string

    @ApiProperty({
        description: 'model of the starship',
        example: 'model 01'
    })
    @IsString()
    model: string

    @ApiProperty({
        description: 'manufacturer of the starship',
        example: 'Builds Starships Corporations'
    })
    @IsString()
    manufacturer: string

    @ApiProperty({
        description: 'cost of the starship',
        example: '350000'
    })
    @IsString()
    cost_in_credits: string

    @ApiProperty({
        description: 'length of the starship',
        example: '50'
    })
    @IsString()
    length: string

    @ApiProperty({
        description: 'max atmosphering speed of the starship',
        example: '950'
    })
    @IsString()
    max_atmosphering_speed: string

    @ApiProperty({
        description: 'crew of the starship',
        example: '10'
    })
    @IsString()
    crew: string

    @ApiProperty({
        description: 'passengers of the starship',
        example: '6'
    })
    @IsString()
    passengers: string

    @ApiProperty({
        description: 'cargo capacity of the starship',
        example: '100'
    })
    @IsString()
    cargo_capacity: string

    @ApiProperty({
        description: 'consumables of the starship',
        example: '1 month'
    })
    @IsString()
    consumables: string

    @ApiProperty({
        description: 'hyperdrive rating of the starship',
        example: '2.0'
    })
    @IsString()
    hyperdrive_rating: string

    @ApiProperty({
        description: 'MGLT of the starship',
        example: '30'
    })
    @IsString()
    MGLT: string

    @ApiProperty({
        description: 'class of the starship',
        example: 'class 01'
    })
    @IsString()
    starship_class: string

}