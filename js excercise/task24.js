var Course = 'Web Developer'

console.log("Is Course == 'Web Developer'? I predict True.");
console.log(Course == 'Web Developer');

console.log("Is Course == 'Web Developer'? I predict false.");
console.log(!Course == 'Web Developer');

//• Tests using the lower case function
console.log("Is Course == 'web developer'? I predict True.");
console.log(Course.toLowerCase() == 'web developer');

/*• Numerical tests involving equality and inequality, greater 
than and less than, greater than or equal to, and less than or equal to*/

var Score = '70'

console.log("Is Score == '70'? I predict True.");
console.log(Score == '70');

console.log("Is Score == '70'? I predict false.");
console.log(!Score == '70');

console.log("Is Score > '50'? I predict True.");
console.log(Score > '50');

console.log("Is Score < '60'? I predict false.");
console.log(Score < '60');

console.log("Is Score >= '70'? I predict True.");
console.log(Score >= '70');

console.log("Is Score <= '60'? I predict false.");
console.log(Score <= '60');


//Tests using "and" and "or" operators

console.log("Is Score > '60' && Score > '40'? I predict True.");
console.log(Score > '60' && Score > '40' );

console.log("Is Score > '80' && Score > '90'? I predict False.");
console.log(Score > '80' && Score > '90' );

console.log("Is Score > '90' || Score > '50'? I predict True.");
console.log(Score > '90' || Score > '50' );

console.log("Is Score > '80' || Score > '90'? I predict false.");
console.log(Score > '80' || Score > '90' );

//• Test whether an item is in a array

var person = ["Rehan", "Danish", "Wajahat"];

console.log("item is in a array [Danish] "+ person.includes("Danish"))

//• Test whether an item is not in a array

console.log("item is not in a array [Mahavaid] " + person.includes("Mahavaid"))


