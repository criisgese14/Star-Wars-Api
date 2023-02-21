import { PartialType } from "@nestjs/swagger";
import { CreateStarshipDto } from "./CreateStarship.dto";

export class EditStarshipDto extends PartialType(CreateStarshipDto){}