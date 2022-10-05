var person = ["Rehan", "Danish", "Wajahat"];

person[1] = "Hasnain"

console.log(person);

console.log("\n I found a bigger dinner \n \n")

person.splice(3,0,"mahavaid", "Hammad", "Sharukh");


for(var i = 0; i < person.length; i++){

    var Message = person[i];

    console.log("Assalam Walikum, "+Message+" Dear, \n I am inviting you for dinner tonight. \n");
    
}