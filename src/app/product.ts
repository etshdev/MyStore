export class Product {
    id:number=0
    title:string=""
    price:number=0
    description:string=""
    category:string=""
    image:string=""
    Qty:number=1
    rating:rating={rate:0,count:0}
}

export interface rating {
    rate:number,
    count:number
}

