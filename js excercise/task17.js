var person = ["Rehan", "Danish", "Wajahat"];

person[1] = "Hasnain"

person.splice(3,0,"mahavaid", "Hammad", "Sharukh");

console.log(person);

console.log("I just found out that your new dinner table won't arrive in time for dinner, and I have space for only two guests. \n \n");
console.log("I can invite only two people for dinner. \n \n");

console.log(person.pop()+" Sorry, I can't invite you for the dinner.");
console.log(person.pop()+" Sorry, I can't invite you for the dinner.");
console.log(person.pop()+" Sorry, I can't invite you for the dinner.");
console.log(person.pop()+" Sorry, I can't invite you for the dinner. \n \n");

console.log(person[0]+" you are still invited to the dinner");
console.log(person[1]+" you are still invited to the dinner");

person.pop();
person.pop();

console.log(person);


