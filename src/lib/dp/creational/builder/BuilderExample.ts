import Waiter from "./Waiter";
import HawaiinPizzaBuilder from "./HawaiinPizzaBuilder";
import SpicyPizzaBuilder from "./SpicyPizzaBuilder";
import PizzaBuilder from "./PizzaBuilder";
import Pizza from "./Pizza";
import IExample from "../../../models/IExample";

class BuilderExample implements IExample {

  public start(): void {
    console.log("\nSTART TEST BUILDER PATTER \n");

    const waiter = new Waiter();
    const hawaiinPizzaBuilder: PizzaBuilder = new HawaiinPizzaBuilder();
    const spicePizzaBuilder: PizzaBuilder = new SpicyPizzaBuilder();

    waiter.setPizzaBuilder(hawaiinPizzaBuilder);
    waiter.constructPizza();

    const pizza1: Pizza = waiter.getPizza();

    console.log(pizza1);

    waiter.setPizzaBuilder(spicePizzaBuilder);
    waiter.constructPizza();

    const pizza2: Pizza = waiter.getPizza();

    console.log(pizza2);

    console.log("\nEND TEST BUILDER PATTER \n");
  }

}

export default BuilderExample;
