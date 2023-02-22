import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateFilmDto } from './dto/createFilm.dto';
import { EditFilmDto } from './dto/editFilm.dto';
import { FilmsService } from './films.service';
import {ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags} from '@nestjs/swagger';
import { Film, FilmDocument } from './schema/films.schema';
import { deleteFilm } from './interface/deleteFilm.interface';

@ApiTags('Films Endpoints')
@Controller('films')
export class FilmsController {
    constructor(private readonly filmsService: FilmsService) {};
    
    @Get()
    @ApiOkResponse({
        description: 'Get all films',
    })
    @ApiNotFoundResponse({
        description: 'Error to get all films'
    })

    getAllFilms(): Promise<FilmDocument[]>{
        return this.filmsService.getAllFilms();
    };

    @Get('/:id')
    @ApiOkResponse({
        description: 'Get film',
        type: Film
    })
    @ApiNotFoundResponse({
        description: 'Error to get film'
    })

    getFilm(@Param('id') filmId:string): Promise<FilmDocument>{
        return this.filmsService.getFilm(filmId);
    };

    @Post()
    @ApiCreatedResponse({ 
        description: 'Film created successfully',
        type: Film
    })
    @ApiBadRequestResponse({
        description: "Error to create film"
    })

    createFilm(@Body() newFilm: CreateFilmDto): Promise<FilmDocument>{
        return this.filmsService.createFilm(newFilm);
    };

    @Put("/:id")
    @ApiOkResponse({
        description: "Film edited successfully",
        type: Film
    })
    @ApiNotFoundResponse({
        description: 'Error to edit film. Film not found'
    })

    updateFilm(@Param('id') filmId:string, @Body() updateFilm: EditFilmDto): Promise<FilmDocument>{
        return this.filmsService.updateFilm(filmId, updateFilm);
    }

    @Delete("/:id")
    @ApiOkResponse({
        description: "Film deleted successfully",
    })
    @ApiNotFoundResponse({
        description: 'Error to delete film. Film not found'
    })

    deleteFilm(@Param('id') filmId:string): Promise<deleteFilm>{
        return this.filmsService.deleteFilm(filmId);
    };
};
