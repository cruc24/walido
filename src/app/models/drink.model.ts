interface iDrink {

  name : string;
  ingredients : string[] | null;
  category : string | null;
  description : string | null;
  price : number;
  imageUrl ? : string;
  available : boolean;
  alcholic : boolean;
}

export class Drink implements iDrink {

  public name : string;
  public ingredients : string[] | null;
  public category : string | null;
  public description : string | null;
  public price : number;
  public imageUrl ? : string;
  public available : boolean;
  public alcholic : boolean;

  constructor(name:string,ingredients:string[],category:string,description:string,price:number,imageUrl:string,available:boolean,alcholic:boolean){}

}
