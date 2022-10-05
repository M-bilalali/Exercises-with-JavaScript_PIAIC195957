var users = [];


 if (users.length == 0) {
   console.log("We need to add some users");
 } 
 
 
 else {
       
    for(var i = 0; i < username.length; i++){

        if (username[i]=='admin'){
            console.log('Hello '+username[i]+', would you like to see a status report?');
        }
        
        else {
            console.log("Hello "+username[i]+", thank you for logging in again.");
        }
        
     }


 }