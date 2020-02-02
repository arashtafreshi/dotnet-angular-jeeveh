export class Cart {
    items:CartItem[];

    constructor(){
        this.items = [];
    }
}

export class CartItem{
    productId:string;
    count:number;

    constructor(){
        this.productId = "";
        this.count = 0;
    }
}
