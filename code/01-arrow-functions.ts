const pizzas = [{ name: 'Pepperoni', toppings: ['pepperoni'] }];

const mappedPizzas = pizzas.map(pizza => pizza.name.toUpperCase());

const pizza = {
    name: 'Gassan',
    getName: () => console.log(pizza.name)
}
console.log(pizza);
