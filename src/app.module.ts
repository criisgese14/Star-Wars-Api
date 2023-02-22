import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmsModule } from './films/films.module';
import { PlanetsModule } from './planets/planets.module';
import { StarshipsModule } from './starships/starships.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/starWars'),
    FilmsModule,
    PlanetsModule,
    StarshipsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
