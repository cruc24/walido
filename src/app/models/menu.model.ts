import { Drink } from "./drink.model";
import { Piatto } from "./piatto.model"
interface iMenu {

  foods : Piatto[];
  drinks : Drink[];
}

export class Menu implements iMenu {

  public foods : Piatto[];
  public drinks : Drink[];

  constructor(foods:Piatto[], drinks: Drink[]){}

}
