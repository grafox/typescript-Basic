const pizza3 = {
    name: 'Pepperoni',
  };
  
  const toppings3 = ['pepperoni'];
  
  const order3 = Object.assign({}, pizza3, { toppings3 });
  
  const spreadOrder = { ...pizza3, toppings3 };
  
  console.log(order3, spreadOrder);
  