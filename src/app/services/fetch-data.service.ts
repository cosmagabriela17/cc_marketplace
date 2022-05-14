import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getOrderList(id: number) {
    return this.http.get<Order[]>("http://localhost:8080/orders/"+id);
  }
}
