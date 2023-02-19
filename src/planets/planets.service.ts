import { Injectable } from '@nestjs/common';

@Injectable()
export class PlanetsService {

    getAllPlanets() {
        return 'this route must return all planets'
    }

    getPlanet(planetId: string) {
        return 'this route must return a planet'
    }

    createPlanet(newPlanet) {
        return 'planet created successfully'
    }

    updatePlanet(planetId: string, planet) {
        return 'planet updated successfully'
    }

    deletePlanet(planetId: string){
        return 'planet deleted successfully'
    }

}
