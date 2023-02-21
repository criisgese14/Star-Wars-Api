import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStarshipDto } from './dto/CreateStarship.dto';
import { EditStarshipDto } from './dto/EditStarship.dto';
import { deleteStarship } from './interface/deleteStarship.interface';
import { StarshipDocument } from './schema/starships.schema';
import { StarshipsService } from './starships.service';

@ApiTags('Starships Endpoints')
@Controller('starships')
export class StarshipsController {
    constructor(private readonly starshipsService: StarshipsService) {};

    @Get()
    getAllStarships(): Promise<StarshipDocument[]> {
        return this.starshipsService.getAllStarships();
    };

    @Get('/:id')
    getStarship(@Param('id') starshipId: string): Promise<StarshipDocument> {
        return this.starshipsService.getStarship(starshipId);
    };

    @Post()
    createStarship(@Body() newStarship: CreateStarshipDto): Promise<StarshipDocument> {
        return this.starshipsService.createStarship(newStarship);
    };

    @Put('/:id')
    updateStarship(@Param('id') starshipId: string, @Body() starship: EditStarshipDto): Promise<StarshipDocument> {
        return this.starshipsService.updateStarship(starshipId, starship);
    };

    @Delete('/:id')
    deleteStarship(@Param('id') starshipId: string): Promise<deleteStarship>{
        return this.starshipsService.deleteStarship(starshipId);
    };

};
