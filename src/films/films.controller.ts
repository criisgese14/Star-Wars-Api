import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateFilmDto } from './dto/createFilm.dto';
import { EditFilmDto } from './dto/editFilm.dto';
import { FilmsService } from './films.service';
import { ApiTags} from '@nestjs/swagger';
import { FilmDocument } from './schema/films.schema';
import { deleteFilm } from './interface/deleteFilm.interface';

@ApiTags('Films Endpoints')
@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {};
    
    @Get()
    getFilms(): Promise<FilmDocument[]>{
        return this.filmsService.getAllFilms();
    };

    @Get('/:id')
    getFilm(@Param('id') filmId:string): Promise<FilmDocument>{
        return this.filmsService.getFilm(filmId);
    };

    @Post()
    postFilm(@Body() newFilm: CreateFilmDto): Promise<FilmDocument>{
        return this.filmsService.createFilm(newFilm);
    };

    @Put("/:id")
    putFilm(@Param('id') filmId:string, @Body() updateFilm: EditFilmDto): Promise<FilmDocument>{
        return this.filmsService.updateFilm(filmId, updateFilm);
    }

    @Delete("/:id")
    deleteFilm(@Param('id') filmId:string): Promise<deleteFilm>{
        return this.filmsService.deleteFilm(filmId);
    };
};
