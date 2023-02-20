import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type PlanetDocument = HydratedDocument<Planet>;

@Schema({timestamps: {createdAt: 'created', updatedAt: 'updated'}})
export class Planet {
    @Prop()
    name: string;

    @Prop()
    rotation_period: string;
    
    @Prop()
    orbital_period: string;
    
    @Prop()
    diameter: string;

    @Prop()
    climate: string;

    @Prop()
    gravity: string;

    @Prop()
    terrain: string;

    @Prop()
    surface_water: string;

    @Prop()
    population: string;
};

export const PlanetSchema = SchemaFactory.createForClass(Planet);