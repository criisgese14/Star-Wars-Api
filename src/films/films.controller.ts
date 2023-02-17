import { Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { FilmsService } from './films.service';

@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {}
    
    @Get()
    getFilms(): string {
        return "esta ruta debe traer todas las películas"
    };

    @Get('/:id')
    getFilm(@Param() params): string {
        return "soy la ruta /film/" + params.id;
    };

    @Post()
    postFilm(): string {
        return this.filmsService.createFilm()
    };

    @Put("/:id")
    putFilm(): string {
        return "pelicula modificada"
    }

    @Delete("/:id")
    deleteFilm(): string {
        return "pelicula eliminada"
    }
};
