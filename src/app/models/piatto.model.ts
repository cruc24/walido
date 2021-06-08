interface iPiatto {
  nome: string;
  ingredienti: string[];
  prezzo: number;
  qta: number;
  imageUrl ?: string;
}

export class Piatto implements iPiatto {


    public nome: string;
    public ingredienti: string[];
    public prezzo: number;
    public qta: number;
    public imageUrl ?: string;

    constructor(nome: string, ingredienti: string[], prezzo: number , qta: number, imageUrl: string){}

}
