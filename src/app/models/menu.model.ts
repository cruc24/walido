import { Piatto } from "./piatto.model"
interface iMenu {

  foods : Piatto[];
}

export class Menu implements iMenu {

  public foods : Piatto[];

  constructor(foods:Piatto[]){}

}
