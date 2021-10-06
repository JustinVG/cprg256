/* global Variables */
var clientArray=[];


 



/*window.onload = initialize;*/

/*function initialize()
{
    var todayDate = newDate();
    document.getElementById('currentDate').innerHTML = todayDate;
}*/

function calcOrder() {
    var client = {};

 client.fname = document.getElementById('firstName').value;
 client.lname = document.getElementById('lastName').value;
 client.address = document.getElementById('phone').value;
 client.phone = document.getElementById('address').value;
var selectedPizzaType = document.querySelectorAll('input[name="pizzaType[]"]:checked');
var pizzaTotal = 0;

client.pizza = {};

for (let i = 0; i<selectedPizzaType.length; i++){
    var pizzaSelect = selectedPizzaType[i];


    if (pizzaSelect.value == 'Cheesy'){
        var cPizzaSize, cNumOfPizzas, cPizzaToppings;
        var cPizzaCost = 0;
        var cToppingArray = [];
        var cToppingCost = 0;

        cPizzaSize = document.getElementById('cheesySize').value;
        switch (cheesySize) {
            case 'Small':
                cPizzaCost = 8.50;
                break;
            case 'Medium':
                cPizzaCost = 11.50;
                break;
            case 'Large':
                cPizzaCost = 14.00;
                break;
            case 'Extra Large':
                cPizzaCost = 16.50;
                break;
    
        }
        cNumOfPizzas = document.getElementById('numOfCheesy').value;

        cPizzaToppings = document.getElementsByName('cheesyToppings[]');

        for (var pt = 0; pt < cPizzaToppings.length; pt++){

            if (cPizzaToppings[pt].checked == true){
                cToppingCost += 1.75;
                cToppingArray.push( cPizzaToppings[pt].value);
            }
        }
        cPizzaCost = (cPizzaCost + cToppingCost) * cNumOfPizzas;

        pizzaTotal += cPizzaCost;
        client.pizza.cheesy = {};
        client.pizza.cheesy.type= "Super Cheesy";
        client.pizza.cheesy.quantity= cNumOfPizzas;
        client.pizza.cheesy.size= cPizzaSize;
        client.pizza.cheesy.cost= cPizzaCost.toFixed(2);
        client.pizza.cheesy.toppings= cToppingArray;
    }

        if (pizzaSelect.value == 'Extra Meaty'){
            var mPizzaSize, mNumOfPizzas, mPizzaToppings;
            var mPizzaCost = 0;
            var mToppingArray = [];
            var mToppingCost = 0;
    
            mPizzaSize = document.getElementById('meatySize').value;
            switch (meatySize) {
                case 'Small':
                    mPizzaCost = 8.50;
                    break;
                case 'Medium':
                    mPizzaCost = 11.50;
                    break;
                case 'Large':
                    mPizzaCost = 14.00;
                    break;
                case 'Extra Large':
                    mPizzaCost = 16.50;
                    break;
        
            }
            mNumOfPizzas = document.getElementById('numOfMeaty').value;
    
            mPizzaToppings = document.getElementsByName('meatyToppings[]');
    
            for (var pt = 0; pt < mPizzaToppings.length; pt++){
    
                if (mPizzaToppings[pt].checked == true){
                    mToppingCost += 1.75;
                    mToppingArray.push( mPizzaToppings[pt].value);
                }
            }
            mPizzaCost = (mPizzaCost + mToppingCost) * mNumOfPizzas;
    
            pizzaTotal += mPizzaCost;
            client.pizza.meaty = {};
            client.pizza.meaty.type= "Extra Meaty";
            client.pizza.meaty.quantity= mNumOfPizzas;
            client.pizza.meaty.size= mPizzaSize;
            client.pizza.meaty.cost= mPizzaCost.toFixed(2);
            client.pizza.meaty.toppings= mToppingArray;
        }

            if (pizzaSelect.value == 'Really Veggie'){
                var vPizzaSize, vNumOfPizzas, vPizzaToppings;
                var vPizzaCost = 0;
                var vToppingArray = [];
                var vToppingCost = 0;
        
                vPizzaSize = document.getElementById('veggieSize').value;
                switch (veggieSize) {
                    case 'Small':
                        vPizzaCost = 8.50;
                        break;
                    case 'Medium':
                        vPizzaCost = 11.50;
                        break;
                    case 'Large':
                        vPizzaCost = 14.00;
                        break;
                    case 'Extra Large':
                        vPizzaCost = 16.50;
                        break;
            
                }
                vNumOfPizzas = document.getElementById('numOfVeggie').value;
        
                vPizzaToppings = document.getElementsByName('veggieToppings[]');
        
                for (var pt = 0; pt < vPizzaToppings.length; pt++){
        
                    if (vPizzaToppings[pt].checked == true){
                        vToppingCost += 1.75;
                        vToppingArray.push( vPizzaToppings[pt].value);
                    }
                }
                vPizzaCost = (vPizzaCost + vToppingCost) * vNumOfPizzas;
        
                pizzaTotal += vPizzaCost;
                client.pizza.veggie = {};
                client.pizza.veggie.type= "Really Veggie";
                client.pizza.veggie.quantity= vNumOfPizzas;
                client.pizza.veggie.size= vPizzaSize;
                client.pizza.veggie.cost= vPizzaCost.toFixed(2);
                client.pizza.veggie.toppings= vToppingArray;

                
            }





        }
        console.log(client.pizza);

        var selectedSandwichType = document.querySelectorAll('input[name="sandwichType[]"]:checked');
        var sandwichTotal = 0;

        client.sandwich = {};

for (let i = 0; i<selectedSandwichType.length; i++){
    var sandwichSelect = selectedSandwichType[i];

 if (sandwichSelect.value == "All Garden Vegetarian"){
     var AGVprice = 7.50;
     var AGVamount = document.getElementById('AGVnumOfSandwich').value;
     var AGVsandwichTotal = AGVprice * AGVamount;
     
     client.sandwich.agv = {};
    client.sandwich.agv.type = "All Garden Vegetarian";
    client.sandwich.agv.quantity = AGVamount;
    client.sandwich.agv.total = AGVsandwichTotal;
    sandwichTotal += AGVsandwichTotal

 }
 if (sandwichSelect.value == "Big Beef on a Bun"){
    var BBBprice = 8.50;
    var BBBamount = document.getElementById('BBBnumOfSandwich').value;
    var BBBsandwichTotal = BBBprice * BBBamount;
    
    client.sandwich.bbb = {};
   client.sandwich.bbb.type = "Big Beef on a Bun";
   client.sandwich.bbb.quantity = BBBamount;
   client.sandwich.bbb.total = BBBsandwichTotal;
   sandwichTotal += BBBsandwichTotal

}
if (sandwichSelect.value == "Mixed Grill"){
    var MGprice = 9.50;
    var MGamount = document.getElementById('MGnumOfSandwich').value;
    var MGsandwichTotal = MGprice * MGamount;
    
    client.sandwich.mg = {};
   client.sandwich.mg.type = "Mixed Grill";
   client.sandwich.mg.quantity = MGamount;
   client.sandwich.mg.total = MGsandwichTotal;
   sandwichTotal += MGsandwichTotal

}
if (sandwichSelect.value == "Grilled Pork"){
    var GPprice = 9.50;
    var GPamount = document.getElementById('GPnumOfSandwich').value;
    var GPsandwichTotal = GPprice * GPamount;
    
    client.sandwich.gp = {};
   client.sandwich.gp.type = "Grilled Pork";
   client.sandwich.gp.quantity = GPamount;
   client.sandwich.gp.total = GPsandwichTotal;
   sandwichTotal += GPsandwichTotal

}








    }

    var selectedDrinkType = document.querySelectorAll('input[name="drinkType[]"]:checked');
    var drinkTotal = 0;

    client.drink = {};
    for (let i = 0; i<selectedDrinkType.length; i++){
        var drinkSelect = selectedDrinkType[i];

        if(drinkSelect.value == "Cola"){
            var cdrinkNum = document.getElementById('cnumOfDrinks').value;
           var cdrinkSize = document.getElementById('cdrinkSize').value;
            switch (cdrinkSize) {
                case 'Small':
                    cdrinkCost = 1.25;
                    break;
                case 'Medium':
                    cdrinkCost = 1.75;
                    break;
                case 'Large':
                    cdrinkCost = 2.00;
                    break;
            }
            var cdrinkTotal = cdrinkCost * cdrinkNum;

            client.drink.cola = {};
            client.drink.cola.type = "Cola";
            client.drink.cola.quantity = cdrinkNum;
            client.drink.cola.size = cdrinkSize;
            client.drink.cola.cost = cdrinkTotal;
            drinkTotal += cdrinkTotal;
            

        }
        if(drinkSelect.value == "Orange"){
            var odrinkNum = document.getElementById('onumOfDrinks').value;
           var odrinkSize = document.getElementById('odrinkSize').value;
            switch (odrinkSize) {
                case 'Small':
                    odrinkCost = 1.25;
                    break;
                case 'Medium':
                    odrinkCost = 1.75;
                    break;
                case 'Large':
                    odrinkCost = 2.00;
                    break;
            }
            var odrinkTotal = odrinkCost * odrinkNum;

            client.drink.orange = {};
            client.drink.orange.type = "Orange";
            client.drink.orange.quantity = odrinkNum;
            client.drink.orange.size = odrinkSize;
            client.drink.orange.cost = odrinkTotal;
            drinkTotal += odrinkTotal;
            
        }




    
    if(drinkSelect.value == "Lemon"){
        var ldrinkNum = document.getElementById('lnumOfDrinks').value;
       var ldrinkSize = document.getElementById('ldrinkSize').value;
        switch (ldrinkSize) {
            case 'Small':
                ldrinkCost = 1.25;
                break;
            case 'Medium':
                ldrinkCost = 1.75;
                break;
            case 'Large':
                ldrinkCost = 2.00;
                break;
        }
        var ldrinkTotal = ldrinkCost * ldrinkNum;

        client.drink.lemon = {};
        client.drink.lemon.type = "Lemon";
        client.drink.lemon.quantity = ldrinkNum;
        client.drink.lemon.size = ldrinkSize;
        client.drink.lemon.cost = ldrinkTotal;
        drinkTotal += ldrinkTotal;
        
    }
    if(drinkSelect.value == "Root Beer"){
        var rbdrinkNum = document.getElementById('rbnumOfDrinks').value;
       var rbdrinkSize = document.getElementById('rbdrinkSize').value;
        switch (rbdrinkSize) {
            case 'Small':
                rbdrinkCost = 1.25;
                break;
            case 'Medium':
                rbdrinkCost = 1.75;
                break;
            case 'Large':
                rbdrinkCost = 2.00;
                break;
        }
        var rbdrinkTotal = rbdrinkCost * rbdrinkNum;

        client.drink.rootbeer = {};
        client.drink.rootbeer.type = "Root Beer";
        client.drink.rootbeer.quantity = rbdrinkNum;
        client.drink.rootbeer.size = rbdrinkSize;
        client.drink.rootbeer.cost = rbdrinkTotal;
        drinkTotal += rbdrinkTotal;
        
    }
    console.log(client.drink);
}
dispOrder(client);





}
function dispOrder(client) {
    /*var fName, lName, address, phone;
    var receipt = '';

    receipt += '<h3> <strong> <u> Customer Details </u> </strong> </h3>';
    receipt += client.fName + ' ' + client.lName + '<br>';
    receipt += client.address + '<br>';
    receipt += client.phone + '<br>';
    receipt += '<h3><strong><u>Order Details</u></strong></h3>';
    receipt += '<p>' + pizza.quantity + ' ' + pizza.size + ' ' + pizza.type + ' Pizza  $' + pizza.cost.toFixed(2) + '</p>';
    receipt += 'Toppings:'
    receipt += '<ul>';
    for (var pt = 0; pt < pizza.toppings.length; pt++) {
        receipt += '<li>' + pizza.toppings[pt] + '</li>';
    }
    receipt += '</ul>';
    receipt += sandwich.quantity + ' ' + sandwich.type + ' Sandwich  $' + sandwich.cost.toFixed(2) + '<br>';
    receipt += drink.quantity + ' ' + drink.size + ' ' + drink.type + ' $' + drink.cost.toFixed(2) + '<br>';
    receipt += "<p><b>Total Cost : </b>" + "$" + allCost.totalCost + "</p>";
*/
    document.getElementById('displayOrder').innerHTML = JSON.stringify(client, null, 15);

}
function editOrder(){
orderButton.disabled = true;
editButton.disabled = false;

editButton.addEventListner("click", function(){
    calcOrder();
});

}
        



    // Pizzas Section
   /* var cPizzaSize, cNumOfPizzas, cPizzaCost, cPizzaToppings;
    var cToppingCost = 0;
    var cToppingArray = [];
    var pizza = {};


    pizzaType = document.querySelector('form div input[name="pizzaType[]"]:checked').value;

    pizzaSize = document.getElementById('pizzaSize').value;

    switch (pizzaSize) {
        case 'Small':
            pizzaCost = 8.50;
            break;
        case 'Medium':
            pizzaCost = 11.50;
            break;
        case 'Large':
            pizzaCost = 14.00;
            break;
        case 'Extra Large':
            pizzaCost = 16.50;
            break;
        default:
            pizzaCost = 0;
            break;

    }

    numOfPizzas = document.getElementById('numOfPizza').value;

    pizzaToppings = document.getElementsByName('pizzaToppings[]');

    for (var pt = 0; pt < pizzaToppings.length; pt++) {

        if (pizzaToppings[pt].checked == true) {
            toppingCost += 1.75;
            toppingArray.push(pizzaToppings[pt].value);
        }

    }

    pizzaCost = (pizzaCost + toppingCost) * numOfPizzas;

    pizza.cost = pizzaCost;
    pizza.type = pizzaType;
    pizza.size = pizzaSize;
    pizza.quantity = numOfPizzas;
    pizza.toppings = toppingArray;
    */
/*
    //Sandwiches Section
    var sandwichType, numOfSandwichs, sandwichCost;
    var sandwich = {};

    sandwichType = document.querySelector('form div input[name="sandwichType[]"]:checked').value;

    switch (sandwichType) {
        case 'All Garden Vegetarian':
            sandwichCost = 7.50;
            break;
        case 'Big Beef on a Bun':
            sandwichCost = 8.50;
            break;
        case 'Mixed Grill':
            sandwichCost = 9.50;
            break;
        case 'Grilled Pork':
            sandwichCost = 9.50;
            break;
        default:
            sandwichCost = 0;
            break;

    }


    numOfSandwichs = document.getElementById('numOfSandwich').value;



    sandwichCost = sandwichCost * numOfSandwichs;

    sandwich.cost = sandwichCost;

    sandwich.type = sandwichType;
    sandwich.quantity = numOfSandwichs;






    //Drinks Section
    var drinkType, drinkSize, numOfdrink, drinkCost;
    var drink = {};


    drinkType = document.querySelector('form div input[name="drinkType[]"]:checked').value;

    drinkSize = document.getElementById('drinkSize').value;

    switch (drinkSize) {
        case 'Small':
            drinkCost = 1.25;
            break;
        case 'Medium':
            drinkCost = 1.75;
            break;
        case 'Large':
            drinkCost = 2.00;
            break;
        default:
            drinkCost = 0;
            break;

    }

    numOfdrink = document.getElementById('numOfDrinks').value;

    drinkCost = drinkCost * numOfdrink;

    drink.cost = drinkCost;
    drink.type = drinkType;
    drink.size = drinkSize;
    drink.quantity = numOfdrink;

    //Calculating the Total Cost
    var allCost = {};
    var totalCost = pizza.cost + sandwich.cost + drink.cost;
    allCost.totalCost = totalCost;

    dispOrder(pizza, sandwich, drink, allCost);

}

function dispOrder(pizza, sandwich, drink, allCost) {
    var fName, lName, address, phone;
    var receipt = '';

    fName = document.getElementById('firstName').value;
    lName = document.getElementById('lastName').value;
    address = document.getElementById('address').value;
    phone = document.getElementById('phone').value;

    receipt += '<h3> <strong> <u> Customer Details </u> </strong> </h3>';
    receipt += fName + ' ' + lName + '<br>';
    receipt += address + '<br>';
    receipt += phone + '<br>';
    receipt += '<h3><strong><u>Order Details</u></strong></h3>';
    receipt += '<p>' + pizza.quantity + ' ' + pizza.size + ' ' + pizza.type + ' Pizza  $' + pizza.cost.toFixed(2) + '</p>';
    receipt += 'Toppings:'
    receipt += '<ul>';
    for (var pt = 0; pt < pizza.toppings.length; pt++) {
        receipt += '<li>' + pizza.toppings[pt] + '</li>';
    }
    receipt += '</ul>';
    receipt += sandwich.quantity + ' ' + sandwich.type + ' Sandwich  $' + sandwich.cost.toFixed(2) + '<br>';
    receipt += drink.quantity + ' ' + drink.size + ' ' + drink.type + ' $' + drink.cost.toFixed(2) + '<br>';
    receipt += "<p><b>Total Cost : </b>" + "$" + allCost.totalCost + "</p>";

    document.getElementById('displayOrder').innerHTML = receipt;
}
function editOrder(pizza, sandwich, drink, ){

    document.querySelector('form div input[name="pizzaType[]"]:checked').value = pizza.type;
    document.getElementById('pizzaSize').value = pizza.size;
    document.getElementById('numOfPizza').value = pizza.quantity;
       for (var pt = 0; pt < toppingArray.length; pt++) {

        if (toppingArray[pt].value != null) {
            document.getElementsByName('pizzaToppings[]') = checked;
        }
    }
    document.querySelector('form div input[name="drinkType[]"]:checked').value = sandwich.type;
    document.getElementById('numOfSandwich').value = sandwich.quantity;

    document.querySelector('form div input[name="drinkType[]"]:checked').value = drink.type;
    document.getElementById('drinkSize').value = drink.size;
    document.getElementById('numOfDrinks').value = drink.quantity;



}
*/
