var person = ["Rehan", "Danish", "Wajahat"];

for(var i = 0; i < person.length; i++){

    var Message = person[i];
    console.log("\n Assalam Walikum, "+Message+" Dear,\n I am inviting you for dinner tonight.\n");
    
}

console.log("\n\n"+ person[1]+ ", This Person can't come to dinner \n\n");

person[1] = "Hasnain"

console.log("\nNew invitation list From Dinner ")

for(var i = 0; i < person.length; i++){

    var Message = person[i];
    console.log("\n Assalam Walikum, "+Message+" Dear,\n I am inviting you for dinner tonight.\n");
    

}


