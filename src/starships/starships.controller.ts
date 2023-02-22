import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateStarshipDto } from './dto/CreateStarship.dto';
import { EditStarshipDto } from './dto/EditStarship.dto';
import { deleteStarship } from './interface/deleteStarship.interface';
import { Starship, StarshipDocument } from './schema/starships.schema';
import { StarshipsService } from './starships.service';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiNotFoundResponse } from '@nestjs/swagger';

@ApiTags('Starships Endpoints')
@Controller('starships')
export class StarshipsController {
    constructor(private readonly starshipsService: StarshipsService) {};

    @Get()
    @ApiOkResponse({
        description: 'Get all starships',
    })
    @ApiNotFoundResponse({
        description: 'Error to get all starships'
    })

    getAllStarships(): Promise<StarshipDocument[]> {
        return this.starshipsService.getAllStarships();
    };

    @Get('/:id')
    @ApiOkResponse({
        description: 'Get starship',
        type: Starship
    })
    @ApiNotFoundResponse({
        description: 'Error to get starship'
    })

    getStarship(@Param('id') starshipId: string): Promise<StarshipDocument> {
        return this.starshipsService.getStarship(starshipId);
    };

    @Post()
    @ApiCreatedResponse({
        description: 'Starship created successfully',
        type: Starship
    })
    @ApiBadRequestResponse({
        description: 'Error to create starship'
    })

    createStarship(@Body() newStarship: CreateStarshipDto): Promise<StarshipDocument> {
        return this.starshipsService.createStarship(newStarship);
    };

    @Put('/:id')
    @ApiOkResponse({
        description: 'Starship edited successfully',
        type: Starship
    })
    @ApiNotFoundResponse({
        description: 'Error to edit starship. Starship not found'
    })

    updateStarship(@Param('id') starshipId: string, @Body() starship: EditStarshipDto): Promise<StarshipDocument> {
        return this.starshipsService.updateStarship(starshipId, starship);
    };

    @Delete('/:id')
    @ApiOkResponse({
        description: 'Starship deleted successfully'
    })
    @ApiNotFoundResponse({
        description: 'Error to delete starship. Starship not found'
    })
    
    deleteStarship(@Param('id') starshipId: string): Promise<deleteStarship>{
        return this.starshipsService.deleteStarship(starshipId);
    };

};
