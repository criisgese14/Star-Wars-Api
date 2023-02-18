import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Film, FilmDocument } from './schema/films.schema';
import { CreateFilmDto } from './dto/createFilm.dto';
import { EditFilmDto } from './dto/editFilm.dto';
import { deleteFilm } from './interface/deleteFilm.interface';

@Injectable()
export class FilmsService {
    constructor(@InjectModel(Film.name) private filmModel: Model<FilmDocument>) {};

    async getFilms(): Promise<FilmDocument[]>{

        const films = await this.filmModel.find();
        
        return films;
    };

    async getFilm(filmId: string): Promise<FilmDocument>{
        
        const film = await this.filmModel.findById(filmId);

        if (!film) throw new NotFoundException();

        return film;
    };

    async createFilm(newFilm: CreateFilmDto): Promise<FilmDocument>{
        
        const film = await this.filmModel.create(newFilm);
        
        await film.save();
        
        return film;
    };

    async updateFilm(filmId: string, film: EditFilmDto): Promise<FilmDocument>{
        
        const updatedFilm = await this.filmModel.findByIdAndUpdate(filmId, film, {new: true});
        
        return updatedFilm;
    };

    async deleteFilm(filmId: string): Promise<deleteFilm>{
        
        await this.filmModel.findByIdAndDelete(filmId);
        
        return {
            statusCode: 200,
            message: "film deleted succesfully"
        };
    };
};
