import { PartialType } from "@nestjs/mapped-types";
import { CreateFilmDto } from "./createFilm.dto";


export class EditFilmDto extends PartialType(CreateFilmDto){}