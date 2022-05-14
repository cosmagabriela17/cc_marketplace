import { Injectable } from '@angular/core';
import { Coordinates } from '../models/Coordinates';

@Injectable({
  providedIn: 'root'
})
export class CoordinateService {

  coordinates : Coordinates;

  constructor() { 

  }

  setCoordinates (_coordinates: Coordinates) {
      this.coordinates = _coordinates;
  }

  getCoordinates() {
      return this.coordinates;
  }
}
