// Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() 
// that modifies the array of magicians by adding the phrase 
// the Great to each magician’s name. 

var magicians = ["David Blaine","Lance Burton","Shin Lim","David Devant","Apollo Robbins"];

function make_great(great){

    for(var i = 0; i < magicians.length; i++){

console.log("Great "+magicians[i]);
    }


}

make_great(magicians);



// Call show_magicians() to see that the list has actually been modified.



function show_magicians(magicians){

    for(var i = 0; i < magicians.length; i++){

        console.log(magicians[i]);}
        
}


show_magicians(magicians)