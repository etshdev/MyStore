import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';
import { Product } from '../product';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnDestroy {
  Product:any;
  Products:Product[]=[];
  Subscription: Subscription;
  Subscription2: Subscription;

  constructor(private CartService:CartService,private ProductsService:ProductsService,private _ActivatedRoute:ActivatedRoute) {
    
    let id=this._ActivatedRoute.snapshot.params?.['id'];
    console.log(CartService.CartProducts)
   this.Subscription=  ProductsService.getProductDetails(id)?.subscribe((res)=>{

      this.Product=res;

    });
  this.Subscription2 =  ProductsService.getProduct().subscribe((res)=>{
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
    if(Productadded?.Qty==undefined)
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
    alert("Added To Your Cart ");
  }


  ngOnDestroy() {
    this.Subscription.unsubscribe();
    this.Subscription2.unsubscribe();

  }

}
