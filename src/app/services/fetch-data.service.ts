import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../models/Order';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private http: HttpClient) { }

  getOrderList(id: number) {
    return this.http.get<Order[]>("http://localhost:8080/orders/"+id);
  }

  getUser(id: number) {
    return this.http.get<User>("http://localhost:8080/clients/"+id);
  }
}
