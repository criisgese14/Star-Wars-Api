import { Injectable } from '@nestjs/common';

@Injectable()
export class FilmsService {

    createFilm(){
        return 'pelicula creada con éxito'
    }

}
