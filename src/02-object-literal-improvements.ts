const pizza2 = {
    name: 'Pepperoni',
    price: 15,
    getName(){
        return this.name
    }
}

const toppings = ['pepperoni']

const order = {pizza2,toppings}

console.log(order);
