import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Starship, StarshipSchema } from './schema/starships.schema';
import { StarshipsController } from './starships.controller';
import { StarshipsService } from './starships.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Starship.name, schema: StarshipSchema}])],
  controllers: [StarshipsController],
  providers: [StarshipsService]
})
export class StarshipsModule {}
