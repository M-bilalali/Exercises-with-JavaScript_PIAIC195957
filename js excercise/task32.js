var current_user =["Bilal", "Rehan", "Danish", "Wajahat","Hasnain"];
var new_user = ["Bilal1", "Rehan", "Danish22", "Wajahat","Hasnain99"];


for(var i = 0; i < current_user.length; i++){

    if (current_user[i]==new_user[i]){
        console.log("The username has already been used. Sorry Username "+new_user[i]+" is not Available.");
    }
    
    else {
        console.log("the username "+new_user[i]+" is available.");
    }

}