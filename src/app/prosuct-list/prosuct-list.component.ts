import { Component } from '@angular/core';
import { Product } from '../product';
import {ProductsService} from '../products.service'

@Component({
  selector: 'app-prosuct-list',
  templateUrl: './prosuct-list.component.html',
  styleUrls: ['./prosuct-list.component.css']
})
export class ProsuctListComponent {

  constructor(private pro:ProductsService) {
    
    console.log(this.pro.getProduct)
  }

  

}
