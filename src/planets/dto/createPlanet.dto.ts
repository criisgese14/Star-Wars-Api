import { IsString } from "class-validator";


export class CreatePlanetDto {
    @IsString()
    name: string;

    @IsString()
    rotation_period: string;
    
    @IsString()
    orbital_period: string;
    
    @IsString()
    diameter: string;

    @IsString()
    climate: string;

    @IsString()
    gravity: string;

    @IsString()
    terrain: string;

    @IsString()
    surface_water: string;

    @IsString()
    population: string;
}