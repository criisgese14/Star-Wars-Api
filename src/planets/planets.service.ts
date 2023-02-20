import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Planet, PlanetDocument } from './schema/planets.schema';
import { CreatePlanetDto } from './dto/createPlanet.dto';
import { EditPlanetDto } from './dto/editPlanet.dto';
import { deletePlanet } from './interface/deletePlanet.interface';

@Injectable()
export class PlanetsService {
    constructor(@InjectModel(Planet.name) private planetModel: Model<PlanetDocument>) {};

    async getAllPlanets(): Promise<PlanetDocument[]> {

        const planets = await this.planetModel.find();

        return planets;
    };

    async getPlanet(planetId: string): Promise<PlanetDocument> {
        
        const planet = await this.planetModel.findById(planetId);

        return planet;
    }

    async createPlanet(newPlanet: CreatePlanetDto): Promise<PlanetDocument> {
        
        const planet = await this.planetModel.create(newPlanet)

        await planet.save();
        
        return planet;
    }

    async updatePlanet(planetId: string, planet: EditPlanetDto): Promise<PlanetDocument> {
        
        const updatedPlanet = await this.planetModel.findByIdAndUpdate(planetId, planet, {new: true});
        
        return updatedPlanet;
    }

    async deletePlanet(planetId: string): Promise<deletePlanet>{

        await this.planetModel.findByIdAndDelete(planetId);

        return {
            statusCode: 200,
            message: 'planet deleted successfully'
        };
    };

};
