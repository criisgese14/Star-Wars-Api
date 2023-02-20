import { PartialType } from "@nestjs/mapped-types";
import { CreatePlanetDto } from "./createPlanet.dto";


export class EditPlanetDto extends PartialType(CreatePlanetDto){}