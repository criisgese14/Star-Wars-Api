import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { StarshipsService } from './starships.service';

@Controller('starships')
export class StarshipsController {
    constructor(private readonly starshipsService: StarshipsService) {};

    @Get()
    getAllStarships() {
        return this.starshipsService.getAllStarships();
    };

    @Get('/:id')
    getStarship(@Param('id') starshipId: string) {
        return this.starshipsService.getStarship(starshipId);
    };

    @Post()
    createStarship(@Body() newStarship) {
        return this.starshipsService.createStarship(newStarship);
    };

    @Put('/:id')
    updateStarship(@Param('id') starshipId: string, @Body() starship) {
        return this.starshipsService.updateStarship(starshipId, starship);
    };

    @Delete('/:id')
    deleteStarship(@Param('id') starshipId: string){
        return this.starshipsService.deleteStarship(starshipId);
    };

};
