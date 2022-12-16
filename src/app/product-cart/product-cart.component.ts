import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent {
  Total:number=0;
 @Output() deleteProduct:EventEmitter<any> = new EventEmitter()

  @Input() productList:Product [] =[];

  constructor(private cartservice:CartService) {
    this.cartservice.CartProducts.map((val)=>{
      
      this.Total+=val.Qty*val.price
      this.cartservice.total=this.Total;

    })    
  }
  

  CalTotal()
  {
    this.Total=0;
    this.productList.map((val)=>{
      this.Total+=val.Qty*val.price
    })
    this.cartservice.total=this.Total;
  }

  RemoveProduct(product:Product)
  {
    this.deleteProduct.emit(product);
    this.CalTotal();
  }
}
