import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePlanetDto } from './dto/createPlanet.dto';
import { EditPlanetDto } from './dto/editPlanet.dto';
import { deletePlanet } from './interface/deletePlanet.interface';
import { PlanetsService } from './planets.service';
import { PlanetDocument } from './schema/planets.schema';

@ApiTags('Planets Endpoints')
@Controller('planets')
export class PlanetsController {
    constructor(private readonly planetsService: PlanetsService) {};

    @Get()
    getAllPlanets(): Promise<PlanetDocument[]> {
        return this.planetsService.getAllPlanets();
    };

    @Get('/:id')
    getPlanet(@Param('id') planetId: string): Promise<PlanetDocument> {
        return this.planetsService.getPlanet(planetId);
    };

    @Post()
    createPlanet(@Body() newPlanet: CreatePlanetDto): Promise<PlanetDocument> {
        return this.planetsService.createPlanet(newPlanet);
    };

    @Put('/:id')
    updatePlanet(@Param('id') planetId: string, @Body() planet: EditPlanetDto): Promise<PlanetDocument> {
        return this.planetsService.updatePlanet(planetId, planet);
    };

    @Delete('/:id')
    deletePlanet(@Param('id') planetId: string): Promise<deletePlanet>{
        return this.planetsService.deletePlanet(planetId);
    };
};
