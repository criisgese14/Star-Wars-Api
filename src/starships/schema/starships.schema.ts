import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";
import { HydratedDocument } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type StarshipDocument = HydratedDocument<Starship>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'edited'}})
export class Starship {
    @ApiProperty({
        description: 'title of the starship',
        example: 'starship 01'
    })
    @Prop({type: IsString})
    name: string

    @ApiProperty({
        description: 'model of the starship',
        example: 'model 01'
    })
    @Prop({type: IsString})
    model: string

    @ApiProperty({
        description: 'manufacturer of the starship',
        example: 'Builds Starships Corporations'
    })
    @Prop({type: IsString})
    manufacturer: string

    @ApiProperty({
        description: 'cost of the starship',
        example: '350000'
    })
    @Prop({type: IsString})
    cost_in_credits: string

    @ApiProperty({
        description: 'length of the starship',
        example: '50'
    })
    @Prop({type: IsString})
    length: string

    @ApiProperty({
        description: 'max atmosphering speed of the starship',
        example: '950'
    })
    @Prop({type: IsString})
    max_atmosphering_speed: string

    @ApiProperty({
        description: 'crew of the starship',
        example: '10'
    })
    @Prop({type: IsString})
    crew: string

    @ApiProperty({
        description: 'passengers of the starship',
        example: '6'
    })
    @Prop({type: IsString})
    passengers: string

    @ApiProperty({
        description: 'cargo capacity of the starship',
        example: '100'
    })
    @Prop({type: IsString})
    cargo_capacity: string

    @ApiProperty({
        description: 'consumables of the starship',
        example: '1 month'
    })
    @Prop({type: IsString})
    consumables: string

    @ApiProperty({
        description: 'hyperdrive rating of the starship',
        example: '2.0'
    })
    @Prop({type: IsString})
    hyperdrive_rating: string

    @ApiProperty({
        description: 'MGLT of the starship',
        example: '30'
    })
    @Prop({type: IsString})
    MGLT: string

    @ApiProperty({
        description: 'class of the starship',
        example: 'class 01'
    })
    @Prop({type: IsString})
    starship_class: string

    @ApiProperty({
        description: 'created date of the starship',
    })
    @Prop({type: Date})
    created: Date;

    @ApiProperty({
        description: 'updated date of the starship',
    })
    @Prop({type: Date})
    updated: Date;
};

export const StarshipSchema = SchemaFactory.createForClass(Starship);