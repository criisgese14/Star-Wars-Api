import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type StarshipDocument = HydratedDocument<Starship>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'edited'}})
export class Starship {
    @Prop()
    name: string

    @Prop()
    model: string

    @Prop()
    manufacturer: string

    @Prop()
    cost_in_credits: string

    @Prop()
    length: string

    @Prop()
    max_atmosphering_speed: string

    @Prop()
    crew: string

    @Prop()
    passengers: string

    @Prop()
    cargo_capacity: string

    @Prop()
    consumables: string

    @Prop()
    hyperdrive_rating: string

    @Prop()
    MGLT: string

    @Prop()
    starship_class: string
};

export const StarshipSchema = SchemaFactory.createForClass(Starship);