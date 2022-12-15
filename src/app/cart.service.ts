import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 CartProducts:Product []=[];
 name:any;
 total:any;
 
  constructor() { 
    
  }
}
