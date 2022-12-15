import { Component, OnDestroy } from '@angular/core';
import { Product } from '../product';
import {ProductsService} from '../products.service'
import {CartService} from '../cart.service'
import { Subscription } from 'rxjs';

import { FormGroup } from '@angular/forms';
declare var $: any; // declaring jquery in this way solved the problem



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnDestroy {
  Subscription: Subscription;

  Products:Product[]=[];

  constructor(private ProductsService:ProductsService , private CartService:CartService ) {
    
   this.Subscription= ProductsService.getProduct().subscribe((res)=>{
        this.Products=res;
    })
    
  }

  changeQty(eventInfo:any,Id:number)
  {
    let Pro = this.Products.map(x=>
      {
        if(x.id === Id)
        {
          x.Qty = eventInfo.value*1;
        }
        return x
      }
    )
  
  }

  addToCart(ProductId:number)
  {
    let Productadded=this.Products.filter(x=>x.id==ProductId)[0];   
    if(Productadded.Qty==undefined)
    {
      Productadded.Qty=1;
    }
        if(this.CartService.CartProducts.filter(x=>x.id==ProductId)[0]==undefined)
    {
      this.CartService.CartProducts.push(Productadded);


    }
    else
    {
      this.CartService.CartProducts.splice(this.CartService.CartProducts.findIndex(item => item.id === Productadded.id), 1)
      this.CartService.CartProducts.push(Productadded);

    }
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();

  }

}
