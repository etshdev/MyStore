import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

   cartProducts: Product []=[];
  Total:number=0;
  constructor(private _cartservice:CartService , private Router:Router) {
    this.cartProducts= _cartservice.CartProducts;
    this.cartProducts.map((val)=>{
      
      this.Total+=val.Qty*val.price
    })
  }
  
  CheckOutForm = new FormGroup({
    fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Address: new FormControl('',[Validators.required,Validators.minLength(6)]),
    creditCardNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{16}$')]),

  });
  CalTotal()
  {
    this.Total=0;
    this.cartProducts.map((val)=>{
      this.Total+=val.Qty*val.price
    })
  }
  CheckOut(CheckOutForm:any)
  {
    if(CheckOutForm.valid)
    {
      this._cartservice.name=CheckOutForm.value.fullName;
      this._cartservice.total=this.Total;
      this.Router.navigate(['/checkout']);
      this._cartservice.CartProducts=[];
    }
  }
}
