import { IsString, IsDateString, IsNumber } from "class-validator";

export class CreateFilmDto {

    @IsString()
    title: string;

    @IsNumber()
    episode_id: number;

    @IsString()
    opening_crawl: string;

    @IsString()
    director: string;

    @IsString()
    producer: string;

    @IsDateString()
    release_date: Date;

}