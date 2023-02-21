import { Model } from 'mongoose';
import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Starship, StarshipDocument } from './schema/starships.schema';
import { CreateStarshipDto } from './dto/CreateStarship.dto';
import { EditStarshipDto } from './dto/EditStarship.dto';
import { deleteStarship } from './interface/deleteStarship.interface';

@Injectable()
export class StarshipsService {
    constructor(@InjectModel(Starship.name) private starshipModel: Model<StarshipDocument>) {};

    async getAllStarships(): Promise<StarshipDocument[]> {
        try {

            const starships = await this.starshipModel.find();
            
            if(!starships.length) {
                throw new Error;
            };

            return starships;

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "The Database Is Empty Or Not Exist",
                error: "Not Found"
            });

        };
    };

    async getStarship(starshipId: string): Promise<StarshipDocument> {
        try {

            const starship = await this.starshipModel.findById(starshipId);
            return starship;
            
        } catch (error) {
            
            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid Id. Starship not Found",
                error: "Not Found"
            });

        };
    };

    async createStarship(newStarship: CreateStarshipDto): Promise<StarshipDocument> {
        try {
            
            const starship = await this.starshipModel.create(newStarship);
            await starship.save();
            return starship;

        } catch (error) {
            
            console.log(error);

        };
    };

    async updateStarship(starshipId: string, starship: EditStarshipDto): Promise<StarshipDocument> {
        try {
            
            const updatedStarship = await this.starshipModel.findByIdAndUpdate(starshipId, starship, {new: true});
            return updatedStarship;

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. Starship To Update Not Found",
                error: "Not Found"
            });
            
        };
    };

    async deleteStarship(starshipId: string): Promise<deleteStarship>{
        try {
            
            await this.starshipModel.findByIdAndDelete(starshipId);
            return {
                statusCode: 200,
                message: 'Starship Deleted Successfully'
            };

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. The Starship To Delete Does Not Exist Or Has Already Been Deleted",
                error: "Not Found",
            });
    
        };
    };
};
