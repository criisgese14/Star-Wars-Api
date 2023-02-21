import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Planet, PlanetDocument } from './schema/planets.schema';
import { CreatePlanetDto } from './dto/createPlanet.dto';
import { EditPlanetDto } from './dto/editPlanet.dto';
import { deletePlanet } from './interface/deletePlanet.interface';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PlanetsService {
    constructor(@InjectModel(Planet.name) private planetModel: Model<PlanetDocument>) {};

    async getAllPlanets(): Promise<PlanetDocument[]> {
        try {
            
            const planets = await this.planetModel.find();

            if(!planets.length) {
                throw new Error;
            };

            return planets;

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "The Database Is Empty Or Not Exist",
                error: "Not Found"
            });
            
        };
    };

    async getPlanet(planetId: string): Promise<PlanetDocument> {
        try {
            
            const planet = await this.planetModel.findById(planetId);
            return planet;

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid Id. Planet not Found",
                error: "Not Found"
            });
            
        };  
    };

    async createPlanet(newPlanet: CreatePlanetDto): Promise<PlanetDocument> {
        try {
            
            const planet = await this.planetModel.create(newPlanet);
            await planet.save();
            return planet;

        } catch (error) {

            console.log(error);
            
        };
    };

    async updatePlanet(planetId: string, planet: EditPlanetDto): Promise<PlanetDocument> {
        try {
            
            const updatedPlanet = await this.planetModel.findByIdAndUpdate(planetId, planet, {new: true});
            return updatedPlanet;

        } catch (error) {
            
            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. Planet To Update Not Found",
                error: "Not Found"
            });

        };
    };

    async deletePlanet(planetId: string): Promise<deletePlanet>{
        try {
            
            await this.planetModel.findByIdAndDelete(planetId);
            return {
                statusCode: 200,
                message: 'Planet Deleted Successfully'
            };

        } catch (error) {
            
            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. The Planet To Delete Does Not Exist Or Has Already Been Deleted",
                error: "Not Found",
            });

        };
    };
};
