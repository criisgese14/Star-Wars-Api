import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Starship, StarshipDocument } from './schema/starships.schema';
import { CreateStarshipDto } from './dto/CreateStarship.dto';
import { EditStarshipDto } from './dto/EditStarship.dto';
import { deleteStarship } from './interface/deleteStarship.interface';

@Injectable()
export class StarshipsService {
    constructor(@InjectModel(Starship.name) private starshipModel: Model<StarshipDocument>) {};

    async getAllStarships(): Promise<StarshipDocument[]> {

        const starships = await this.starshipModel.find();

        return starships;
    };

    async getStarship(starshipId: string): Promise<StarshipDocument> {

        const starship = await this.starshipModel.findById(starshipId);
        
        return starship;
    };

    async createStarship(newStarship: CreateStarshipDto): Promise<StarshipDocument> {
        
        const starship = await this.starshipModel.create(newStarship);

        return starship;
    }

    async updateStarship(starshipId: string, starship: EditStarshipDto): Promise<StarshipDocument> {

        const updatedStarship = await this.starshipModel.findByIdAndUpdate(starshipId, starship, {new: true});

        return updatedStarship;
    }

    async deleteStarship(starshipId: string): Promise<deleteStarship>{

        await this.starshipModel.findByIdAndDelete(starshipId);

        return {
            statusCode: 200,
            message: 'starship deleted successfully'
        };
    }
}
