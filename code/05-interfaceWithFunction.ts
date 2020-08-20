interface Pizza {
    name: string;
    sizes: string[];
    getAvailableSizes7(): void
  }
  
  let pizza4: Pizza
  
  function createPizza(name: string, sizes: string[]): Pizza {
    return {
      name,
      sizes,
      getAvailableSizes7(){
        return this.sizes
      },
    };
  }
  
  pizza4 = createPizza('Pepperoni', ['small', 'medium'])
  