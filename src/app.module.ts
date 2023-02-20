import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
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
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
