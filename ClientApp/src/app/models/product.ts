export class Product {
    name:string;
    image:string;
    description:string;
    id:string;
    price:number;
    active:boolean;

    constructor(){
        this.name,this.image,this.description,this.id="";
        this.price=0;
        this.active = true;
    }
}
