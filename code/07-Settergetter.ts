class Sizes {
    constructor(public sizes: string[]) {}
  
    set availableSizes(sizes: string[]) {
      this.sizes = sizes;
    }
  
    get availableSizes() {
      return this.sizes
    }
  }
  
  const sizes = new Sizes(['small', 'medium']);
  
  // invoke getter
  console.log(sizes.availableSizes);
  // invoke setter
  sizes.availableSizes = ['medium', 'large'];
  
  console.log(sizes.availableSizes);
  
  class Pizza6 {
    public toppings: string[] = [];
  
    constructor(readonly name2: string) {}
  
    public addTopping(topping: string) {
      this.toppings.push(topping);
    }
  }
  
  const pizza6 = new Pizza6('Pepperoni');
  
  pizza6.addTopping('pepperoni');