class Pizza5 {
    name: string;
    toppings: string[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }
  
  const pizza5 = new Pizza5('Pepperoni');
  
  pizza5.addTopping('pepperoni');
  
  console.log(pizza5);
  