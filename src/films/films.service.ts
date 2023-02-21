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

    async getAllFilms(): Promise<FilmDocument[]>{
        try {
            
            const films = await this.filmModel.find();
            if(!films.length) throw new Error;
            return films;

        } catch (error) {
            
            throw new NotFoundException({
                statusCode: 404,
                message: "The Database Is Empty Or Not Exist",
                error: "Not Found"
            });

        };
    };

    async getFilm(filmId: string): Promise<FilmDocument>{
        try {
            
            const film = await this.filmModel.findById(filmId);
            if(!film) throw new Error;
            return film;

        } catch (error) {
          
            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid Id. Film not Found",
                error: "Not Found"
            });

        };
    };

    async createFilm(newFilm: CreateFilmDto): Promise<FilmDocument>{
        try {
            
            const film = await this.filmModel.create(newFilm);
            await film.save();
            return film;

        } catch (error) {

            console.log(error);
            
        };
    };

    async updateFilm(filmId: string, film: EditFilmDto): Promise<FilmDocument>{
        try {
            
            const updatedFilm = await this.filmModel.findByIdAndUpdate(filmId, film, {new: true});
            if(!updatedFilm) throw new Error;
            return updatedFilm;

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. Film To Update Not Found",
                error: "Not Found"
            });
            
        };
    };

    async deleteFilm(filmId: string): Promise<deleteFilm>{
        try {
            
            const deletedFilm = await this.filmModel.findByIdAndDelete(filmId);
            if(!deletedFilm) throw new Error;
            return {
                statusCode: 200,
                message: "Film Deleted Succesfully"
            };

        } catch (error) {

            throw new NotFoundException({
                statusCode: 404,
                message: "Invalid ID. The Film To Delete Does Not Exist Or Has Already Been Deleted",
                error: "Not Found",
            });
            
        };
    };
};
