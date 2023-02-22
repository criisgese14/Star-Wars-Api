import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { HydratedDocument } from "mongoose";

export type PlanetDocument = HydratedDocument<Planet>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'edited'}})
export class Planet {
    @ApiProperty({
        description: 'title of the planet',
        example: 'planet 01'
    })
    @Prop({type: IsString})
    name: string;

    @ApiProperty({
        description: 'rotation period of the planet',
        example: '10'
    })
    @Prop({type: IsString})
    rotation_period: string;
    
    @ApiProperty({
        description: 'orbital period of the planet',
        example: '50'
    })
    @Prop({type: IsString})
    orbital_period: string;
    
    @ApiProperty({
        description: 'diameter of the planet',
        example: '10568'
    })
    @Prop()
    diameter: string;

    @ApiProperty({
        description: 'climate of the planet',
        example: 'frozen'
    })
    @Prop()
    climate: string;

    @ApiProperty({
        description: 'gravity of the planet',
        example: '0.5'
    })
    @Prop()
    gravity: string;

    @ApiProperty({
        description: 'terrain of the planet',
        example: 'forests'
    })
    @Prop()
    terrain: string;

    @ApiProperty({
        description: 'surface water of the planet',
        example: '15'
    })
    @Prop()
    surface_water: string;

    @ApiProperty({
        description: 'population of the planet',
        example: '20000000'
    })
    @Prop()
    population: string;

    @ApiProperty({
        description: 'created date of the planet',
    })
    @Prop({type: Date})
    created: Date;

    @ApiProperty({
        description: 'updated date of the planet',
    })
    @Prop({type: Date})
    edited: Date;
};

export const PlanetSchema = SchemaFactory.createForClass(Planet);