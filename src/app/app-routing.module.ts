import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"home",component:ProductComponent},
  {path:'ProductDetails/:id',component:ProductDetailsComponent},
  {path:"cart",component:CartComponent},
  {path:"checkout",component:CheckOutComponent},
  {path:"**",component:ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
