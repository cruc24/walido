interface iPiatto {

  name : string;
  ingredients : string | null;
  category : string | null;
  description : string | null;
  price : number;
  imageUrl ? : string;
  available : boolean;
}

export class Piatto implements iPiatto {

  public name : string;
  public ingredients : string | null;
  public category : string | null;
  public description : string | null;
  public price : number;
  public imageUrl ? : string;
  public available : boolean;

  constructor(name:string,ingredients:string,category:string,description:string,price:number,imageUrl:string,available:boolean){}

}
