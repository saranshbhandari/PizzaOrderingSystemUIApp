import { Injectable } from '@angular/core';
import { Order } from 'src/models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  Cart!: Array<Order>;

}
