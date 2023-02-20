import { Injectable } from '@nestjs/common';

@Injectable()
export class StarshipsService {

    getAllStarships() {
        return 'this route must return all starships'
    }

    getStarship(starshipId: string) {
        return 'this route must return a starship'
    }

    createStarship(newStarship) {
        return 'starship created successfully'
    }

    updateStarship(starshipId: string, starship) {
        return 'starship updated successfully'
    }

    deleteStarship(starshipId: string){
        return 'starship deleted successfully'
    }
}
