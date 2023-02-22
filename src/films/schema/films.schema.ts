import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { IsDateString, IsNumber, IsString } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export type FilmDocument = HydratedDocument<Film>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'updated'}})
export class Film {

    @ApiProperty({
        description: 'title of the film',
        example: 'example title'
    })
    @Prop({type: IsString})
    title: string;

    @ApiProperty({
        description: 'episode id of the film',
        example: 99
    })
    @Prop({type: IsNumber})
    episode_id: number;

    @ApiProperty({
        description: 'opening of the film',
        example: 'example opening'
    })
    @Prop({type: IsString})
    opening_crawl: string;

    @ApiProperty({
        description: 'director of the film',
        example: 'Mr. X'
    })
    @Prop({type: IsString})
    director: string;

    @ApiProperty({
        description: 'producer of the film',
        example: 'Mr. X'
    })
    @Prop({type: IsString})
    producer: string;

    @ApiProperty({
        description: 'release date of the film',
        example: '2023-02-22'
    })
    @Prop({type: IsDateString})
    release_date: Date;

    @ApiProperty({
        description: 'created date of the film',
    })
    @Prop({type: Date})
    created: Date;

    @ApiProperty({
        description: 'updated date of the film',
    })
    @Prop({type: Date})
    updated: Date;

}

export const FilmSchema = SchemaFactory.createForClass(Film);