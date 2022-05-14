import { Component, OnInit } from '@angular/core';
import { CoordinateService } from '../services/coordinate.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  mapOptions: google.maps.MapOptions;
  marker : any;
  constructor(public coordinatesService: CoordinateService) { }

  ngOnInit(): void {
    this.mapOptions =  {
      center: { lat : this.coordinatesService.getCoordinates().getLatitude(), lng: this.coordinatesService.getCoordinates().getLongitude() },
      zoom:14
    }
    this.marker = {
      position: { lat: this.coordinatesService.getCoordinates().getLatitude(), lng: this.coordinatesService.getCoordinates().getLongitude() },
     }
  }
  
   
}
