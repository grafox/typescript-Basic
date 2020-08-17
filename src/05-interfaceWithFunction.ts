interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes(): void;
  }
  
  let pizza4: Pizza
  
  function createPizza(name: string, sizes: string[]): Pizza {
    return {
      name,
      sizes,
      getAvailableSizes() {
        return this.sizes;
      },
    };
  }
  
  pizza4 = createPizza('Pepperoni', ['small', 'medium'])
  