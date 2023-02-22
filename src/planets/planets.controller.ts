import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreatePlanetDto } from './dto/createPlanet.dto';
import { EditPlanetDto } from './dto/editPlanet.dto';
import { deletePlanet } from './interface/deletePlanet.interface';
import { PlanetsService } from './planets.service';
import { Planet, PlanetDocument } from './schema/planets.schema';

@ApiTags('Planets Endpoints')
@Controller('planets')
export class PlanetsController {
    constructor(private readonly planetsService: PlanetsService) {};

    @Get()
    @ApiOkResponse({
        description: 'Get all planets',
    })
    @ApiNotFoundResponse({
        description: 'Error to get all planets'
    })

    getAllPlanets(): Promise<PlanetDocument[]> {
        return this.planetsService.getAllPlanets();
    };

    @Get('/:id')
    @ApiOkResponse({
        description: 'Get planet',
        type: Planet
    })
    @ApiNotFoundResponse({
        description: 'Error to get planet'
    })

    getPlanet(@Param('id') planetId: string): Promise<PlanetDocument> {
        return this.planetsService.getPlanet(planetId);
    };

    @Post()
    @ApiCreatedResponse({
        description: 'Planet created successfully',
        type: Planet
    })
    @ApiBadRequestResponse({
        description: 'Error to create planet'
    })

    createPlanet(@Body() newPlanet: CreatePlanetDto): Promise<PlanetDocument> {
        return this.planetsService.createPlanet(newPlanet);
    };

    @Put('/:id')
    @ApiOkResponse({
        description: 'Planet edited successfully',
        type: Planet
    })
    @ApiNotFoundResponse({
        description: 'Error to edit planet. Planet not found'
    })

    updatePlanet(@Param('id') planetId: string, @Body() planet: EditPlanetDto): Promise<PlanetDocument> {
        return this.planetsService.updatePlanet(planetId, planet);
    };

    @Delete('/:id')
    @ApiOkResponse({
        description: 'Planet deleted successfully'
    })
    @ApiNotFoundResponse({
        description: 'Error to delete planet. Planet not found'
    })
    
    deletePlanet(@Param('id') planetId: string): Promise<deletePlanet>{
        return this.planetsService.deletePlanet(planetId);
    };
};
