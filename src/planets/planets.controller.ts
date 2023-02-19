import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PlanetsService } from './planets.service';

@Controller('planets')
export class PlanetsController {
    constructor(private readonly planetsService: PlanetsService) {};

    @Get()
    getAllPlanets() {
        return this.planetsService.getAllPlanets();
    };

    @Get('/:id')
    getPlanet(@Param('id') planetId: string) {
        return this.planetsService.getPlanet(planetId);
    };

    @Post()
    createPlanet(@Body() newPlanet) {
        return this.planetsService.createPlanet(newPlanet);
    };

    @Put('/:id')
    updatePlanet(@Param('id') planetId: string, @Body() planet) {
        return this.planetsService.updatePlanet(planetId, planet);
    };

    @Delete('/:id')
    deletePlanet(@Param('id') planetId){
        return this.planetsService.deletePlanet(planetId);
    };
};
