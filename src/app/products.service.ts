import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { 

    
  }

  getProduct():Observable<any>
  {
    return this.http.get("https://fakestoreapi.com/products");
  }
  getProductDetails(id:number):Observable<any>
  {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
  
}
