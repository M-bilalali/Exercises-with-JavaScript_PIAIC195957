// // Sandwiches: Write a function that accepts a array of items 
// // a person wants on a sandwich. The function should have one parameter 
// // that collects as many items as the function call provides, 
// // and it should print a summary of the sandwich that is being ordered. 
// // Call the function three times, 
// // using a different number of arguments each time.

function sandwich_items(...items){

    for(var i=0; i<items.length;i++){

        console.log("You have ordered to make sandwitch with items "+items[i]);
    }
}

sandwich_items("Salad", "cacumber", "egg"); console.log("\n");
sandwich_items("Healthy Salad", "cacumber", "Tomato"); console.log("\n");
sandwich_items("Avacado" , "Tomato" , "Cucumber");

