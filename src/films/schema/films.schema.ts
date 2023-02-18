import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type FilmDocument = HydratedDocument<Film>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'updated'}})
export class Film {
    @Prop()
    title: string;

    @Prop({unique: true})
    episode_id: number;

    @Prop()
    opening_crawl: string;

    @Prop()
    director: string;

    @Prop()
    producer: string;

    @Prop()
    release_date: Date;

}

export const FilmSchema = SchemaFactory.createForClass(Film);