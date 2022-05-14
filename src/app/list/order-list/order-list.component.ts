import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import { Coordinates } from '../../models/Coordinates';
import { Order } from '../../models/Order';
import { CoordinateService } from '../../services/coordinate.service';
import { FetchDataService } from '../../services/fetch-data.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import { MapComponent } from 'src/app/map/map.component';
import { ErrorHandlingComponent } from 'src/app/error/error-handling/error-handling.component';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  constructor(private _fetch_data : FetchDataService, private _coordonates_service : CoordinateService, public router: Router, private dialog : MatDialog ) {

  }
  clientId: number;
  exists : boolean = false;
  error : boolean = false;
  displayedColumns: string[] = ['orderId', 'value', 'numberOfProducts', 'locationName'];
  dataSource: any;
  message : string;
  
  ngOnInit(): void {
  }
  
  showOnMaps(_longitude: number, _latitude: number) {
        console.log(1);
        this._coordonates_service.setCoordinates(new Coordinates(_longitude, _latitude));
        const dialogRef = this.dialog.open(MapComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
   };
  onClick() {
    this._fetch_data.getOrderList(this.clientId).subscribe((data: Order[]) => {
      this.dataSource = data;
      console.log(data);
      this.exists = true;
    }, (err: Error) => {
      this.error = true;
       const dialogRef = this.dialog.open(ErrorHandlingComponent);
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
        });
      });
    
  }

}
