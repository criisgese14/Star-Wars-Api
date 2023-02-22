import { IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlanetDto {
    @ApiProperty({
        description: 'title of the planet',
        example: 'planet 01'
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'rotation period of the planet',
        example: '10'
    })
    @IsString()
    rotation_period: string;
    
    @ApiProperty({
        description: 'orbital period of the planet',
        example: '50'
    })
    @IsString()
    orbital_period: string;
    
    @ApiProperty({
        description: 'diameter of the planet',
        example: '10568'
    })
    @IsString()
    diameter: string;

    @ApiProperty({
        description: 'climate of the planet',
        example: 'frozen'
    })
    @IsString()
    climate: string;

    @ApiProperty({
        description: 'gravity of the planet',
        example: '0.5'
    })
    @IsString()
    gravity: string;

    @ApiProperty({
        description: 'terrain of the planet',
        example: 'forests'
    })
    @IsString()
    terrain: string;

    @ApiProperty({
        description: 'surface water of the planet',
        example: '15'
    })
    @IsString()
    surface_water: string;

    @ApiProperty({
        description: 'population of the planet',
        example: '20000000'
    })
    @IsString()
    population: string;
}