function pizzaOven (crustType, sauceType, cheese, toppings){
    var pizza = {};
        pizza.crustType = crustType;
        pizza.sauceType = sauceType;
        pizza.cheese = cheese;
        pizza.toppings = toppings;
        return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"])
var p2 = pizzaOven("hand tossed","marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])
var p3 = pizzaOven("hand tossed","marinara", "mozzarella" , ["mushrooms", "sausage", "bacon", "chicken"])
var p4 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "pineapple"])
console.log (p1);
console.log(p2);
console.log(p3);
console.log(p4);

var pizzaElements = {
    crustType:["deep dish", "hand tossed", "flat bread"],
    sauceType:["traditional", "marinara", "pesto", "alfredo"],
    cheese:["mozzarella", "feta"],
    toppings :["mushrooms", "sausage", "bacon", "chicken", "olives", "onions"],
}


function randomPizza(){
    // var rct = Math.floor(Math.random()* crustType.length-1);
    var newPizza = {}
    for (var element in pizzaElements){
        var elementList = pizzaElements[element]
        var randomIndex = Math.floor(Math.random()* elementList.length)
        newPizza[element]= elementList[randomIndex]
    }
    return newPizza; 
}
var rp1 = randomPizza();
console.log(rp1)
