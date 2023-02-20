import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PlanetsController } from './planets.controller';
import { PlanetsService } from './planets.service';
import { Planet, PlanetSchema } from './schema/planets.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Planet.name, schema: PlanetSchema}])],
  controllers: [PlanetsController],
  providers: [PlanetsService]
})
export class PlanetsModule {}
