import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent {
  name:string='';
  Amount:number=0;
  constructor(private CartService:CartService) {
    this.name=this.CartService.name;
    this.Amount=CartService.total;
  }

}
