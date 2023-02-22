import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsDateString, IsNumber } from "class-validator";

export class CreateFilmDto {

    @ApiProperty({
        description: 'title of the film',
        example: 'example title'
    })
    @IsString()
    title: string;

    @ApiProperty({
        description: 'episode of the film',
        example: 99
    })
    @IsNumber()
    episode_id: number;

    @ApiProperty({
        description: 'opening of the film',
        example: 'example opening'
    })
    @IsString()
    opening_crawl: string;

    @ApiProperty({
        description: 'director of the film',
        example: 'Mr. X'
    })
    @IsString()
    director: string;

    @ApiProperty({
        description: 'producer of the film',
        example: 'Mr. X'
    })
    @IsString()
    producer: string;

    @ApiProperty({
        description: 'release date of the film',
        example: '2023-02-22'
    })
    @IsDateString()
    release_date: Date;

}