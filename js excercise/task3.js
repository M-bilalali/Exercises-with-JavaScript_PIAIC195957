var person_Name = "Eric,";

var Name1 = person_Name.toLowerCase();
var Name2 = person_Name.toUpperCase();

function titlecase(str){
    return str.replace(/\w\S/g, function(t) { return t.toUpperCase() });
}

console.log(Name1);
console.log(Name2);
console.log(titlecase(person_Name));