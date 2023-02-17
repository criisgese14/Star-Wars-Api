import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FilmsModule } from './films/films.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/starWars'),
    FilmsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
