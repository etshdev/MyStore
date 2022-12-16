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
  constructor(private _cartservice:CartService , private Router:Router) {
    this.cartProducts= _cartservice.CartProducts;

  }
  
  CheckOutForm = new FormGroup({
    fullName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    Address: new FormControl('',[Validators.required,Validators.minLength(6)]),
    creditCardNumber: new FormControl('',[Validators.required,Validators.pattern('[0-9]{16}$')]),

  });
  
  CheckOut(CheckOutForm:any)
  {
    if(CheckOutForm.valid)
    {
      this._cartservice.name=CheckOutForm.value.fullName;
      // this._cartservice.total=this.Total;
      this.Router.navigate(['/checkout']);
      this._cartservice.CartProducts=[];
    }
  }

  deleteProduct(product:Product):void
  {
    this._cartservice.CartProducts.splice(this._cartservice.CartProducts.findIndex(item => item.id === product.id), 1)
    alert("product Deleted From Cart")
  }
}
