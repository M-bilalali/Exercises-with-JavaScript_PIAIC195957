var username = ['bilal', 'rehan', 'hasnain', 'danish', 'admin'];


for(var i = 0; i < username.length; i++){

if (username[i]=='admin'){
    console.log('Hello '+username[i]+', would you like to see a status report?');
}

else {
    console.log("Hello "+username[i]+", thank you for logging in again.");
}

}