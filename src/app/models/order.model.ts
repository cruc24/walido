import { Piatto } from "./piatto.model";

interface iOrder {

  id: string,
  list: Piatto[],
  amount : number,
  user: string

}

export class Order implements iOrder {


    public id : string;
    public list : Piatto[];
    public amount : number;
    public user : string;

    constructor(nome:string,list:Piatto[],amount:number,user:string){}

}
