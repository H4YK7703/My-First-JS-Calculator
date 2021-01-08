alert("Welcome to The Online Calculator");

const ansW = confirm("Do You Want Calculate Now?", "Yes");

let calFirst = +prompt("Write your first Number");
let calTwo = +prompt("Write your Second Number");

let exType = +prompt("What You Want| 1-+,2--,3-*,4-/");

if(exType == 1) {
    alert(calFirst+calTwo);
} else if(exType == 2) {
    alert(calFirst-calTwo);
} else if(exType == 3){
    alert(calFirst*calTwo);
} else if(exType == 4){
    alert(calFirst/calTwo);
}
else{
    alert("Error");
}