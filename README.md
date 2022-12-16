# MyStore

MyStore is a single-page application built in Angular, that offers a rich, dynamic experience on the web. It presents a list of product which can be added to a cart then chechout. Bellow are all the functionality one can perform:

- View list of products
- Add products to cart
- View products in cart
- Delete product from cart
- Checkout products in cart

##  description
e-commerce website – an application that allows users to view a list of available products to purchase, add them to a shopping cart, and ultimately complete the checkout process.

## Routing
- `\home` product list path. User can see a list of all products. User can add products to cart in this view. When user click on the image, it will take user to the product detail page.

- `ProductDetails/:id` product item detail page. User can see the detail of a product and add the quantity to cart.

- `\cart` cart page. On the left side, user can see all products in cart. User can change the quantity of each product. There is a total amount shows how much user will need to pay for all the products in cart. On the right side, there is a form, user need to enter their full name, address and credit card number, hit submit, to be able to make the payment and go to the confirmation page.

- `\checkout` confirmation page. After user successfully submit their payment information, user will see this page.



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
