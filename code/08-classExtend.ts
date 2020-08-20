class Sizes1 {
    constructor(public sizes: string[]) {}
  
    set availableSizes(sizes: string[]) {
      this.sizes = sizes;
    }
  
    get availableSizes() {
      return this.sizes;
    }
  }
  
  class Pizza extends Sizes1 {
    public toppings: string[] = [];
  
    constructor(readonly name1: string, public sizes: string[]) {
      super(sizes);
    }
  
    public addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }
  
  const pizza1 = new Pizza('Pepperoni', ['small', 'medium']);
  console.log(pizza1.availableSizes);
  pizza1.addTopping('pepperoni');
  